import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { DataAuth } from "../context/DataProvider";
import moment from "moment/moment";

const useStyles = makeStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "80%",
      height: "100%",
      margin: "auto",
      marginTop: "2rem",
      boxShadow: "gray 2px 2px 2px 2px",
    },
    media: {
      height: "30rem",
      objectFit: "contain",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      padding: "2rem",
    },
  });

const News = () => {
  const { leto } = DataAuth();
  const classes = useStyles()

  const date = moment(leto.publishedAt).utc().format("DD-MM-YYYY");
  console.log(leto);
  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image={leto.urlToImage} />
        <CardContent className={classes.content}>
        <Typography variant="h4" component="h2">
          {leto.title}
        </Typography>
        <Typography variant="body1" component="p">
          Date: {date}
        </Typography>
        <Typography variant="body1" component="p">
          Source: {leto.source.name}
        </Typography>
        <Typography variant="body1" component="p">
          Author: {leto.author}
        </Typography>
        <Typography variant="body1" component="p">
          {leto.description}
        </Typography>
        <Typography variant="body1" component="p">
          {leto.content}
        </Typography>
      </CardContent>
    </Card>
  )
};

export default News;
