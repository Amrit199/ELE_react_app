import { Box } from "@material-ui/core";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import BlogsCard from "../Components/BlogsCard";
import Hero from "../Components/Hero";
import heroImg from "../media/news.jpg";

const Listed = () => {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=norway+electricity&apiKey=9932a81d52f24e0a941e532102c02251"
      )
      .then((response) => {
        const sortedData = response.data.articles.sort(
          (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
        );
        const nextData = sortedData.slice(data.length, data.length + 20);
        setData([...data, ...nextData]);
        setHasMore(nextData.length > 0);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const heroData = {
    img: `${heroImg}`,
    heading: "Stay Informed with the Latest Energy News",
    title: "Energy News",
    description: "Stay up to date with the latest news and developments in the world of energy.",
  }
  console.log(data);
  console.log(heroImg)
  return (
    <div>
      <Hero data={heroData}/>
    <Container sx={{ mt: 5 }}>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading ...</h4>}
      >
        <Grid container spacing={5}>
          {data &&
            data.map((item, index) => (
              <Grid item xs="auto" key={index}>
                <BlogsCard key={item.id} data={item} />
              </Grid>
            ))}
        </Grid>
      </InfiniteScroll>
    </Container>
    </div>
  );
};

export default Listed;
