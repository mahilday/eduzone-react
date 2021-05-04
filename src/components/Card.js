import React, { useContext } from "react";
import { HomeContext } from "../contexts/HomeContext";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { Group } from "@material-ui/icons";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CardComponent(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}} disableSpacing>
        <div style={{display: "flex", flexDirection: "row"}} >
        <IconButton aria-label="add to favorites">
          <Group />
        </IconButton>
        <p>{props.studentNum}</p>
        </div>
        <p>{props.price}</p>
      </CardActions>
    </Card>
  );
}
