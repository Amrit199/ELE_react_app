import { List} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BlogsListItems from "./BlogsListItems";


const useStyles = makeStyles((theme) => ({
  blogsListContainer: {
    width: 350,
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
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=electricity&sortBy=publishedAt&apiKey=9932a81d52f24e0a941e532102c02251"
      )
      .then((response) => {
        setData(response.data.articles);
      });
  }, []);
  console.log(data);
  return (
    <List className={classes.blogsListContainer}>
      {data.map((item) => (
        <BlogsListItems data={item}/>
        // <ListItem
        //   className={classes.listItem}
        //   key={item.title}
        //   onClick={handleClick}
        // >
        //   <ListItemText
        //     primary={item.author}
        //     secondary={item.title}
        //     secondaryTypographyProps
        //   />
        // </ListItem>
      ))}
    </List>
  );
};

export default BlogsList;
