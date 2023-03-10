import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogsCard from "../Components/BlogsCard";
import BlogsList from "../Components/BlogsList";
import Hero from "../Components/Hero";
import Search from "../Components/Search";
import heroImg from "../media/news.jpg";

const Listed = () => {
  const heroData = {
    img: `${heroImg}`,
    heading: "Stay Informed with the Latest Energy News",
    title: "Energy News",
    description:
      "Stay up to date with the latest news and developments in the world of energy.",
  };
  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [topic, setTopic] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=norway+${topic}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_api_KEY}`
      )
      .then((response) => {
        setData(response.data.articles);
      });
  }, [topic]);
  console.log(data);

  useEffect(() => {
    setVisibleData(
      data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    );
  }, [data, currentPage, itemsPerPage]);

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <Box>
      <Hero data={heroData} />
      <Search searchTopic={(text) => setTopic(text)} />
      <Box sx={{ display: "flex", paddingX: 7, paddingY: 5 }}>
        <Container sx={{ margin: 0, padding: 0 }}>
          <Grid container rowSpacing={3} columnSpacing={4}>
            {visibleData &&
              visibleData.map((item, index) => (
                <Grid item xs="auto" key={index}>
                  <BlogsCard key={item.id} data={item} />
                </Grid>
              ))}
          </Grid>
          <Box
            sx={{
              width: 500,
              mx: "auto",
              my: "20px",
              height: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={handlePrevClick}
              disabled={currentPage === 1}
              size="large"
            >
              Prev
            </Button>
            <Typography>{currentPage}</Typography>
            <Button
              color="primary"
              variant="outlined"
              onClick={handleNextClick}
              disabled={currentPage * itemsPerPage >= data.length}
              size="large"
            >
              Next
            </Button>
          </Box>
        </Container>
        <BlogsList />
      </Box>
    </Box>
  );
};

export default Listed;
