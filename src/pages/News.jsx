import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { DataAuth } from "../context/DataProvider";
import moment from "moment/moment";
import { Box, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // width: "80%",
    // height: "100%",
    // margin: "auto",
    marginTop: "1rem",
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
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  const date = moment(leto.publishedAt).utc().format("DD-MM-YYYY");
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(leto.content, "text/html");
  const content = htmlDoc.documentElement.textContent;
  console.log(leto);
  return (
    <div>
      <Box sx={{ padding: 10,}}>
      <Button startIcon={<ArrowBack/>} onClick={handleClick} size="large">Back</Button>
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
            {content}
          </Typography>
          <Link href={leto.url}>read more</Link>
        </CardContent>
      </Card>
      </Box>
    </div>
  );
};

export default News;
