import React, { useContext } from "react";
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
import "./mainStyles.scss";
import { GeneralContext } from "../contexts/GeneralContext";

const publicUrl = process.env.PUBLIC_URL;
const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100vh",
    position: "relative",
    background: `url(${publicUrl}/images/bg1.jpg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
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
    bottom: -2,
    right: 80,
    width: "50vw",
  },
  imga:{
    width: "70vw",
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
  rowcenter:{
    display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mobcenter: {
    textAlign: "center",
  },
  flexWork: {
    width: "80%",
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
  text: {
    fontSize: "3rem",
  },
  btnText: {
    "&.MuiButton-root": {
      fontSize: ".8rem",
    },
  },
  mobtext: {
    fontSize: "2.5rem",
  },
}));
const Main = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const classes = useStyles();
  const { desktopView } = useContext(GeneralContext);
  return (
    <Box className={classes.container}>
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
              xs={12}
              sm={12}
              md={10}
              lg={6}
              className={`${classes.textFormat} ${classes.center} ${
                !desktopView && classes.mobcenter
              } ${classes.lightTextColor}`}
            >
              <Typography

                className={`${classes.text} ${!desktopView && classes.mobtext}`}
                gutterBottom
              >
              Best Education for Eduzone University
              </Typography>
              <Typography variant="subtitle1" className="text-white" gutterBottom>
                Esse amet labore duis excepteur excepteur duis enim aute aliqua
                velit. Irure qui occaecat laborum nisi laboris. Ullamco ullamco
                occaecat aliquip in incididunt.
              </Typography>
              <ThemeProvider theme={colorTheme}>
                <Grid container spacing={2} className={` ${!desktopView && classes.rowcenter}`}>
                  <Grid item xs={6} md={3} lg={3}>
                    <Button
                      variant="contained"
                      className={`${!desktopView && classes.btnText} ${
                        classes.button
                      }`}
                      color="primary"
                      disableElevation
                    >
                      Read More
                    </Button>
                  </Grid>

                  <Grid item xs={6} md={3} lg={3}>
                    <Button
                      variant="outlined"
                      className={`${!desktopView && classes.btnText} ${
                        classes.button
                      }`}
                      color="secondary"
                    >
                      About us
                    </Button>
                  </Grid>
                </Grid>
              </ThemeProvider>
            </Grid>
            <Grid
              item
              xs={8}
              sm={5}
              className={`rotate ${classes.halfImageContainer}`}
            >
              <img
                className={`imageRotate ${!desktopView && classes.imga} ${classes.halfImage}`}
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
