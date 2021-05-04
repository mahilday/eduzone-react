import React from "react";
import {
  Grid,
  Box,
  Button,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";

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
  space:{
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center"
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
    "&.MuiButton-root": {
      textTransform: "capitalize",
      fontSize: "20px"
    },
    "&.MuiButton-contained": {
      boxShadow: "none",
      padding:"12px 70px",
    },
  },
  form: {
    display: "flex",
    justifyContent: "space-around",
    background: "#fff",
    padding: "30px 20px",
    borderRadius: "10px",
    margin:"5% 0"
  },
  textField:{
      "&.MuiInputBase-input":{
          background: "#ccc",
          fontSize:"14px"
      }
  }
}));
const Parallax = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.wrapper}>
      <div className={classes.parallaxWrapper}>
        <Grid container className={classes.space}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h2">
              Create your free account now and get immediate access to 100s of
              online courses.
            </Typography>

            <form className={classes.form} noValidate autoComplete="off">
              <Grid item xs={10} md={4}>
                <TextField
                    className={classes.textField}
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={10} md={4}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={10} md={4}>
                <Button
                  className={classes.button}
                  color="primary"
                  variant="contained"
                >
                  Subscribe
                </Button>
              </Grid>
            </form>
          </Grid>
        
        <Box>
          <img src={`${process.env.PUBLIC_URL}/images/para1.png`} alt="para" />
        </Box>
        </Grid>
      </div>
    </div>
  );
};

export default Parallax;
