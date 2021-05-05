import {
  Box,
  Breadcrumbs,
  Link,
  withStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { NavigateNext } from "@material-ui/icons";
import { PropTypes } from "prop-types";

const styles = (theme) => ({
  backGround: {
    background: `url(${process.env.PUBLIC_URL}/images/bnr3.jpg)`,
    height: "30vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  overlay: {
    background: "#35386699",
    width: "100%",
    height: "100%",
   
  },
  text:{
    textAlign:"center",
    padding: "2% 0",
    color:"#fff"
  },
  bcrumb: {
    display: "flex",
    justifyContent: "center",
    padding: ".3% 0",
    textAlign: "center",
    color: "#fff",
  },
  links: {
    textAlign: "center",
  },
});
const Banner = ({ links, title, classes }) => {
  return (
    <Box className={classes.backGround}>
      <Box className={classes.overlay}>
        <Typography className={classes.text} variant="h2">{title}</Typography>
        <Breadcrumbs
          separator={<NavigateNext fontSize="small" />}
          arial-label="Breadcrumb"
          className={classes.bcrumb}
        >
          {links.map((link) => (
            <Link
              key={link.nav}
              className={classes.links}
              color="inherit"
              href={link.nav}
            >
              {link.name}
            </Link>
          ))}
          {/* <Typography color="textPrimary">Breadcrumb</Typography> */}
        </Breadcrumbs>
      </Box>
    </Box>
  );
};
Banner.propTypes = {
  links: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Banner);
