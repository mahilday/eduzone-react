import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Group } from "@material-ui/icons";
import { Divider, ThemeProvider } from "@material-ui/core";
import { colorTheme } from "../themes/colorTheme";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    width: "23%",
    margin: "3% 1%",
    "&.MuiPaper-elevation1":{
      boxShadow: "2px 2px 10px #33333322"
    }
  },
  tabroot: {
    width: "40vw",
  },
  mobileroot: {
    width: "90vw",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  pricebtn:{
    background: "#DAA610", 
    borderRadius: "5px",
    padding: "2px 6px",
    fontWeight: "700"
  }
}));

export default function CardComponent(props) {
  const classes = useStyles();

  return (
    <Card className={`${classes.root} ${props.tabView? classes.tabroot: ''} ${props.mobileView? classes.mobileroot: ''}`}>
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
          <ThemeProvider theme ={colorTheme}>
        <IconButton aria-label="add to favorites">
          <Group color="primary"/>
        </IconButton>
        </ThemeProvider>
        <p>{props.studentNum} Students</p>
        </div>
        <p className={classes.pricebtn}>{props.price}</p>
      </CardActions>
    </Card>
  );
}
