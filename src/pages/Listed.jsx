import { ElectricBolt } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import BlogsCard from "../Components/BlogsCard";
import BlogsListItems from "../Components/BlogsListItems";
import Hero from "../Components/Hero";
import Search from "../Components/Search";
import Topics from "../Components/Topics";
import { DataAuth } from "../context/DataProvider";
import heroImg from "../media/news.jpg";

const Listed = () => {
  const heroData = {
    img: `${heroImg}`,
    heading: "Stay Informed with the Latest Energy News",
    title: "Energy News",
    description:
      "Stay up to date with the latest news and developments in the world of energy.",
  };
  const [visibleData, setVisibleData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const { data, setHeadline, topstories } = DataAuth();

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
      <Search searchTopic={(text) => setHeadline(text)} />
      <Topics />
      <Box sx={{ display: "flex", paddingLeft: 7, paddingY: 5 }}>
        <Container sx={{ margin: 0, padding: 0 }}>
          <Grid container rowSpacing={3} columnSpacing={4}>
            {visibleData &&
              visibleData.map((item, index) => (
                <Grid item xs="auto" key={index}>
                  {item.urlToImage && item.author && <BlogsCard data={item} />}
                  {/* <BlogsCard key={item.id} data={item} /> */}
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
        <Box>
          <Button
            sx={{ fontSize: "1.5rem" }}
            startIcon={<ElectricBolt sx={{ color: "red" }} />}
            size="large"
          >
            Top Headlines
          </Button>
          <Box
            sx={{
              width: "250px",
              height: "600px",
              overflowY: "scroll",
              "&::-webkit-scrollbar": { display: "none" },
              boxShadow: 'gray 2px 2px 2px 2px',
            }}
          >
            {topstories.map((item, index) => (
              <BlogsListItems key={index} data={item} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Listed;
