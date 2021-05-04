import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import { colorTheme } from "../themes/colorTheme";
import { motion } from "framer-motion";
import './mainStyles.scss'

const publicUrl = process.env.PUBLIC_URL;
const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100vh",
    position: "relative",
  },
  lightTextColor: {
    color: "#fff",
  },
  textFormat: {
    textAlign: "left",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  halfImageContainer: {},
  halfImage: {
    position: "absolute",
    bottom: 0,
    right: 80,
    width: "50vw",
  },
  overlay: {
    background: "rgba(0,0,0,0.6)",
    width: "100%",
    height: "inherit",
  },
  div: {
    height: "100%",
  },
  abpositioning: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  relpositioning: {
    position: "relative",
    top: 0,
  },
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  flexWork: {
    width: "70%",
    height: "80%",
    margin: "0 auto",
  },
  button: {
    "&.MuiButton-containedPrimary": {
      color: "#f4f4f4",
    },
    "&.MuiButton-root": {
      fontWeight: 600,
      textTransform: "capitalize",
      padding: "7px 30px",
      fontSize: "18px",
      marginTop: "20px",
    },
  },
}));
const Main = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <img
        src={`${publicUrl}/images/bg1.jpg`}
        className={classes.image}
        alt="main pic"
      />
      <Box className={`${classes.overlay} ${classes.abpositioning}`}>
        <motion.div
          className={classes.div}
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 3 }}
        >
          <Grid container className={`${classes.flexWork} `}>
            <Grid
              item
              xs={10}
              sm={6}
              className={`${classes.textFormat} ${classes.center} ${classes.lightTextColor}`}
            >
              <Typography variant="h2" gutterBottom>
                Best Education for Eduzone University
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Esse amet labore duis excepteur excepteur duis enim aute aliqua
                velit. Irure qui occaecat laborum nisi laboris. Ullamco ullamco
                occaecat aliquip in incididunt.
              </Typography>
              <ThemeProvider theme={colorTheme}>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Button
                      variant="contained"
                      className={classes.button}
                      color="primary"
                      disableElevation
                    >
                      Read More
                    </Button>
                  </Grid>

                  <Grid item xs={3}>
                    <Button
                      variant="outlined"
                      className={classes.button}
                      color="secondary"
                    >
                      About us
                    </Button>
                  </Grid>
                </Grid>
              </ThemeProvider>
            </Grid>
            <Grid item xs={8} sm={5} className={`rotate ${classes.halfImageContainer}`}>
              <img
                className={`imageRotate ${classes.halfImage}`}
                src={`${publicUrl}/images/slide7over.png`}
                alt="floater"
              />
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Main;