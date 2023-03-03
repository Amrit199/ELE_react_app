import { makeStyles } from "@material-ui/core/styles";
import moment from "moment/moment";
import React from "react";
import { Card, CardContent, CardMedia, CardActionArea, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: 350,
    height: "100%",
    boxShadow: "gray 2px 2px 2px 2px",
  },
  media: {
    height: "10rem"
  },
  heades: {
    display: "flex",
    justifyContent: "space-between"
  },
  items: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    height: "20rem"
  }
});

const BlogsCard = ({ data }) => {
  const classes = useStyles()
  
  let date = moment(data.publishedAt).utc().format("DD-MM-YYYY");
  let longTitle= data.title.split(" ")
  let shortTitle = longTitle.slice(0,7).join(" ")
  let longDesc = data.description.split(" ")
  let shortDescription = longDesc.slice(0,12).join(" ")
  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={data.urlToImage}/>
        <CardContent className={classes.items}>
          <CardContent className={classes.heades}>
          <Typography variant="body1" component="p">
            Date: {date}
          </Typography>
          <Typography variant="body1" component="p">
            Source: {data.source.name}
          </Typography>
          </CardContent>
          <Typography variant="h6" component="h2">
            {shortTitle}
          </Typography>
          <Typography variant="body1" component="p">
            {shortDescription} ....
          </Typography>
          <Typography variant="h6" component="p" color="primary">
            Author: {data.author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogsCard;
