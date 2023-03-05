import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import CustomButton from "./CustomButton";
import { createTheme } from '@mui/material/styles';

const Hero = ( {data} ) => {
  const BlogsBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  const theme = createTheme({
    status: {
      danger: '#00A8E8',
    },
    palette: {
      primary: {
        main: '#00A8E8',
        darker: '#053e85',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
  });
  return (
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh", }} >
      <Container>
        <Navbar />
        <BlogsBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 4,
                mb: 2,
              }}
            >
              {data.heading}
              {/* Welcome to Site */}
            </Typography>
            <Title variant="h1">
              {/* Save money on your electricity bills  */}
              {data.title}
              <TipsAndUpdatesOutlinedIcon theme={theme} color="primary" fontSize="large" />
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 2 }}
            >
              {data.description}
              {/* Compare plans from top providers and find the best deal for you. */}
            </Typography>
            <CustomButton
              backgroundColor="#FDA40A "
              color="#fff"
              buttonText="Compare Plans Now"
              heroBtn={true}
            />
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src={`${data.img}`}
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </BlogsBox>
      </Container>
    </Box>
  );
};

export default Hero;
