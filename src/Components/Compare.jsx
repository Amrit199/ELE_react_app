import { Box, Button, styled, Typography } from "@mui/material";
import React, {useState} from "react";
import Municipalities from "./Municipalities";
import Consumption from "./Consumption";
import { Puff } from "react-loader-spinner";
import ShowTabs from "./ShowTabs";

const Compare = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const [showSpinner, setShowSpinner] = useState(false);

  const handleButtonClick = () => {
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
    }, 2000);
  };


  // const GuidesBox = styled(Box)(({ theme }) => ({
  //   display: "flex",
  //   justifyContent: "space-around",
  //   width: "100%",
  //   marginTop: theme.spacing(5),
  //   marginBottom: theme.spacing(5),
  //   [theme.breakpoints.down("md")]: {
  //     width: "100%",
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     marginBottom: "0",
  //     flexDirection: "column",
  //   },
  // }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 5
      }}
    >

      <Typography
        variant="h2"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        Compare Prices
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
          }}
        >
          Filter by price, contract length, and renewable energy options to find the best plan for you
        </Typography>
      </CustomBox>

      <GuideBox>
        <Municipalities />
        <Consumption />

      </GuideBox>

      <Button onClick={handleButtonClick} variant='contained'> Check Now</Button>
      {showSpinner && 
        <Puff
          height="80"
          width="80"
          radius={1}
          color="#00A8E8 "
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass="spinner-padding"
          visible={true}
        />
      }
      <GuideBox>
        <ShowTabs />
      </GuideBox>
    </Box>
  );
};

export default Compare;