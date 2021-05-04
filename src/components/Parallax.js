import React, { useContext } from "react";
import {
  Grid,
  Box,
  Button,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { GeneralContext } from "../contexts/GeneralContext";

const useStyles = makeStyles((props) => ({
  parallaxWrapper: {
    position: "absolute",
    width: "100%",
    height: "inherit",
    display: "flex",
    flexDirection: "row",

    background: "#00008b78",
    color: "#fff",
  },
  space: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  marginItem:{
    margin:"0 .3vw",
  },
  wrapper: {
    background: `url(${process.env.PUBLIC_URL}/images/paraBg.jpg)`,
    height: "50vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center 50px",
    backgroundAttachment: "fixed",
    position: "relative",
  },
  button: {
    color: "#fff",
    width: "100%",
    "&.MuiButton-root": {
      textTransform: "capitalize",
      fontSize: "20px",
    },
    "&.MuiButton-contained": {
      boxShadow: "none",
      padding: "11px 70px",
    },
  },
  form: {
    display: "flex",
    flexGrow: 1,
    // flexDirection:"column",
    justifyContent: "center",
    padding: "50px",
    background: "#fff",
    borderRadius: "10px",
    margin: "5% 0",
  },
  formMob:{
    flexDirection:"column",
  },
text:{
    fontSize:"2rem",
}
//   textField: {
//       display:"flex",
//     "&.MuiInputBase-input": {
//       background: "#ccc",
//       fontSize: "14px",
//       margin: "0 20px",
//     },
//   },
}));
const Parallax = (props) => {
  const classes = useStyles(props);
  const {mobileView, tabView, desktopView} = useContext(GeneralContext)
  return (
    <div className={classes.wrapper}>
      <div className={classes.parallaxWrapper}>
        <Grid container className={classes.space}>
          <Grid item xs={12} md={6}>
            <Typography className={classes.text}>
              Create your free account now and get immediate access to hundreds of
              online courses.
            </Typography>

            <form className={`${classes.form} ${!desktopView && classes.formMob}`} noValidate autoComplete="off">
              <Grid item xs={10} className={` ${classes.marginItem}`}>
                <TextField
                  fullWidth
                  
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={10} className={` ${classes.marginItem}`}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={10} className={` ${classes.marginItem}`}>
                <Button
                  className={`${classes.button}` }
                  color="primary"
                  variant="contained"
                >
                  Subscribe
                </Button>
              </Grid>
            </form>
          </Grid>

          { desktopView && <Box>
            <img
              src={`${process.env.PUBLIC_URL}/images/para1.png`}
              alt="para"
            />
          </Box>}
        </Grid>
      </div>
    </div>
  );
};

export default Parallax;
