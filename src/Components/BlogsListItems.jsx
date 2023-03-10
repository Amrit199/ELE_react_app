import React from "react";
import { DataAuth } from "../context/DataProvider";
import { useNavigate } from "react-router-dom";
import { ListItem, ListItemText } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    listItem: {
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
      cursor: "pointer",
    },
  }));

const BlogsListItems = ({ data }) => {
    const classes = useStyles()
    const { setLeto } = DataAuth();
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    setLeto(data);
    navigate(`/listed/${data.title}`);
  };
  return (
    <ListItem
      className={classes.listItem}
      key={data.title}
      onClick={handleClick}
    >
      <ListItemText
        primary={data.author}
        secondary={data.title}
      />
    </ListItem>
  );
};

export default BlogsListItems;
