import { Box, Button, Grid, Typography } from "@mui/material";
import { Container} from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogsCard from "../Components/BlogsCard";
import Hero from "../Components/Hero";
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
  const [visibleData, setVisibleData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  useEffect(() => {
    axios.get("https://newsapi.org/v2/everything?q=norway+electricity&sortBy=publishedAt&apiKey=9932a81d52f24e0a941e532102c02251").then((response) => {
      setData(response.data.articles)
    })
  }, [])
  console.log(data)

  useEffect(() => {
    setVisibleData(data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage))
  }, [data, currentPage, itemsPerPage])

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1)
  }

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1)
  }
  
  return (
    <div>
      <Hero data={heroData} />
      <Container sx={{ paddingY: 5 }}>
          <Grid
            container
            padding="1px"
            spacing={3}
            justifyContent="space-between"
          >
            {visibleData &&
              visibleData.map((item, index) => (
                <Grid item xs="auto" key={index}>
                  <BlogsCard key={item.id} data={item} />
                </Grid>
              ))}
          </Grid>
          <Box sx={{ width: 500, mx: "auto", height: "3rem", paddingY: "10px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px"}}>
            <Button variant="outlined" color="primary" onClick={handlePrevClick} disabled={currentPage === 1}>Prev</Button>
            <Typography>{currentPage}</Typography>
            <Button color="primary" variant="outlined" onClick={handleNextClick} disabled={currentPage * itemsPerPage >= data.length}>Next</Button>
          </Box>
          
      </Container>
    </div>
  );
};

export default Listed;