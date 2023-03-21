import { List } from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BlogsListItems from "./BlogsListItems";
import { DataAuth } from "../context/DataProvider";

const useStyles = makeStyles((theme) => ({
  blogsListContainer: {
    margin: 0,
    // maxWidth: 350,
    height: 500,
    overflowY: "scroll",
    overflowX: "hidden",
    border: `3px solid ${theme.palette.divider}`,
    padding: 0,
  },
  listItem: {
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    cursor: "pointer",
  },
}));

const BlogsList = () => {
  const classes = useStyles();
  const { topstories } = DataAuth()
  console.log(topstories)
  return (
    <List className={classes.blogsListContainer}>
      {topstories.map((item, index) => (
        <BlogsListItems key={index} data={item} />
      ))}
    </List>
  );
};

export default BlogsList;
