import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import BlogsCard from '../Components/BlogsCard';
import Hero from '../Components/Hero';
import Topics from '../Components/Topics';
import { DataAuth } from '../context/DataProvider';
import heroImg from "../media/contact.jpg";

const Contact = () => {
  const heroData = {
    img: `${heroImg}`,
    heading: "Get In Touch",
    title: "Contact Us",
    description:
      "Have a question or a comment? We'd love to hear from you.",
  };
  const { data } = DataAuth()
  const [visibleData, setVisibleData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  useEffect(() => {
    setVisibleData(data.slice((currentPage - 1 ) * itemsPerPage, currentPage * itemsPerPage))
  }, [data, currentPage, itemsPerPage])

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <Hero data={heroData} />
      <Topics />
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
      </Box>
      </div>
  )
}

export default Contact