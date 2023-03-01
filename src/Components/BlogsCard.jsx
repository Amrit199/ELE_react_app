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
    paddingBottom: "10px",
    boxShadow: "gray 2px 2px 2px 2px",
  },
  media: {
    height: "10rem"
  },
  items: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    height: "20rem"
  }
});

const BlogsCard = ({ data }) => {
  const classes = useStyles()
  
  let date = moment(data.publishedAt).utc().format("DD-MM-YYYY");

  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={data.urlToImage}/>
        <CardContent className={classes.items}>
          <Typography variant="body1" component="p">
            {date}
          </Typography>
          <Typography variant="h6" component="h2">
            {data.title}
          </Typography>
          <Typography variant="body1" component="p">
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogsCard;
