import { makeStyles } from "@material-ui/core/styles";
import moment from "moment/moment";
import React from "react";
import { Card, CardContent, CardMedia, CardActionArea, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { DataAuth } from "../context/DataProvider";

const useStyles = makeStyles({
  root: {
    width: 300,
    height: "100%",
    boxShadow: "gray 2px 2px 2px 2px",
  },
  media: {
    height: "10rem"
  },
  heades: {
    display: "flex",
    gap: "1.5rem",
  },
  items: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    // height: "15rem"
  }
});

const BlogsCard = ({ data }) => {
  const classes = useStyles()
  const { setLeto } = DataAuth()
  const navigate = useNavigate()
  
  let date = moment(data.publishedAt).utc().format("DD-MMM-YYYY");
  // let longTitle= data.title.split(" ")
  // let shortTitle = longTitle.slice(0,11).join(" ")
  // let longDesc = data.description.split(" ")
  // let shortDescription = longDesc.slice(0,12).join(" ")

  const handleClick = (e) => {
    e.preventDefault()
    setLeto(data)
    navigate(`/listed/${data.title}`)
  }
  
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClick}>
        <CardMedia className={classes.media} image={data.urlToImage}/>
        <CardContent className={classes.items}>
          <CardContent className={classes.heades}>
          <Typography variant="body2" component="p">
            Date: {date}
          </Typography>
          <Typography variant="body2" component="p">
            Source: {data.source.name}
          </Typography>
          </CardContent>
          <Typography variant="h6" component="h2">
            {/* {shortTitle} */}
            {data.title}
          </Typography>
          {/* <Typography variant="body1" component="p">
            {shortDescription} ....
          </Typography> */}
          <Typography variant="body2" component="p" color="primary">
            Author: {data.author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogsCard;
