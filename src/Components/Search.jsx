import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import { countries } from "../data";
// import { Box, Input } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from "@mui/material";

const Searchtext = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  border: "2px gray solid",
  [theme.breakpoints.up("sm")]: {
    // theme.spacing(1)
    // marginLeft: "auto",
    // marginRight: "auto",
    margin: "1rem auto",
    
    width: "50%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      "&:focus": {
        width: "100%",
      },
    },
  },
}));

const Search = ({ searchTopic }) => {
  const [topic, setTopic] = useState("electricity");
  //   const [country, setCountry] = useState("norway");
  const handleSubmit = (e) => {
    e.preventDefault();
    // searchCountry(country);
    searchTopic(topic);
  };

  console.log(topic);
  return (
    <div>
        <Typography variant="h4" textAlign="center" marginY={10}>Search for News Topics</Typography>
        <form onSubmit={handleSubmit}>
        <Searchtext>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
            onChange={(e) => setTopic(e.target.value)}
            // onInput={(e) => setTopic(e.target.value)}
            value={topic}
            />
        </Searchtext>
        </form>
    </div>
  );
};

export default Search;
