import { Typography, makeStyles, Grid, Box } from "@material-ui/core";
import React, { useContext } from "react";
import { CardComponent } from "./index";
import { HomeContext } from "../contexts/HomeContext";
import { GeneralContext } from "../contexts/GeneralContext";

const useStyles = makeStyles((theme) => ({
  popular: {
    width: "100%",
    height: "max-content",
    padding: "5% 0",
    background: "#fff",
    position: "relative",
    marginTop: "-5vh",
    zIndex: "2",
  },
  padcenter: {
    margin: "0 auto",
  },
  btmMarg: {
    margin: "2% 0",
  },
  popCourse: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "80%",
    margin: "0 auto",
  },
  tabPop: {
    width: "90%",
  },
}));
const Popular = () => {
  const classes = useStyles();
  const { popularCourses } = useContext(HomeContext);
  const { mobileView, tabView } = useContext(GeneralContext);
  return (
    <div className={classes.popular}>
      <Grid container>
        <Grid className={classes.padcenter} item xs={10} sm={8} md={6}>
          <Typography variant="h2" gutterBottom>
            Popular Courses
          </Typography>
          <Typography variant="subtitle1">
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </Typography>
        </Grid>
      </Grid>
      <Box
        className={`${classes.popCourse} ${
          tabView || mobileView ? classes.tabPop : ""
        }`}
        my={3}
      >
        {popularCourses.map((pop, index) => (
          <CardComponent
            className={classes.btmMarg}
            mobileView={mobileView}
            tabView={tabView}
            key={index}
            title={pop.title}
            image={pop.imageUrl}
            description={pop.description}
            price={pop.price}
            studentNum={pop.studentNum}
          />
        ))}
      </Box>
    </div>
  );
};

export default Popular;
