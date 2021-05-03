import React, { useEffect, useContext } from "react";
import { GeneralContext } from "../contexts/GeneralContext";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  makeStyles,
  Box,
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import {
  Menu,
  SearchOutlined,
  ExpandMore,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
} from "@material-ui/icons";

const background = "#2ec4b6"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    padding: 0,
  },
  rotate: {
    transform: "rotate(90deg)",
  },
  logoDrawer: {
    width: "100%",
    height: "12vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoWrapper: {
    width: "40%",
    height: "70%",
  },
  logo: {
    width: "65%",
  },
  appBar: {
    "&.MuiAppBar-colorPrimary": {
      backgroundColor: "#ffffff",
      color: "#333333",
    },
    "&.MuiPaper-elevation4": {
      boxShadow: "none",
    },
  },
  spaceBetween: {
    display: "flex",
    justifyContent: "space-between",
  },
  accordionTab: {
    "&.MuiPaper-elevation1": {
      boxShadow: "none",
    },
    padding: "8px",
  },
  navtext: {
    fontSize: "17px",
    fontWeight: "600",
  },
  iconBgNot: {
    background: "#2ec4b6",
    color: "#fff",
    borderRadius: "3px",
  },
  iconBg: {
    background: "#333",
    color: "#fff",
  },
  drawertab: {
    "&.MuiDrawer-paper": {
      padding: "20px",
    },
  },
  social: {
    background: "#2ec4b6",
    color: "#fff",
    margin: "0 5px",
    padding: "5px",
    borderRadius: "50%",
  },
  socialWrapper:{
      width: "fit-content",
     margin: "20% auto",
  },
  button:{
    "&.MuiButton-root":{
      textTransform: "capitalize",
      color: "#fff",
      fontSize:"12px",
      fontWeight: "600",
    },
    background: "#2ec4b6",
  },
}));

const NavData = (navText, accordion, classes, expanded) => {
  return navText.map(({ label, exact, href }, index) => {
    let panelChosen = `panel${index + 1}`;
    return (
      <Accordion
        expanded={expanded === panelChosen}
        onChange={accordion(panelChosen)}
        key={label}
        className={classes.accordionTab}
      >
        <AccordionSummary
          expandIcon={<ExpandMore className={classes.iconBgNot} />}
          aria-controls={`${panelChosen}bh-content`}
          id={`${panelChosen}bh-header`}
        >
          <Typography className={classes.navtext}>
            {label.toUpperCase()}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">{exact}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  });
};
const Header = () => {
  const {
    tabResponsiveness,
    mobileResponsiveness,
    desktopResponsiveness,
    setDrawerOpen,
    setDrawerClose,
    tabView,
    mobileView,
    desktopView,
    drawerOpen,
    navText,
    expanded,
    accordion,
  } = useContext(GeneralContext);

  const classes = useStyles();
  useEffect(() => {
    tabResponsiveness();
    mobileResponsiveness();
    desktopResponsiveness();
    window.addEventListener("resize", () => {
      tabResponsiveness();
      mobileResponsiveness();
      desktopResponsiveness();
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
        { !desktopView &&
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar className={`${classes.spaceBetween}`}>
            <Box className={classes.logoWrapper}>
              <img
                className={classes.logo}
                src={process.env.PUBLIC_URL + "/images/logo-1.png"}
                alt="Logo"
              />
            </Box>
            <Box>
              <Button color="inherit" className={classes.rotate}>
                <SearchOutlined />
              </Button>              
                  {(tabView && !mobileView) && <Button className={classes.button}>Apply Now</Button>}
              <IconButton
                edge="end"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={setDrawerOpen}
              >
                <Menu />
              </IconButton>
              <Drawer
                classes={{ paper: classes.drawertab }}
                {...{
                  anchor: "left",
                  open: drawerOpen,
                  onClose: setDrawerClose,
                }}
                ModalProps={{
                  keepMounted: true, 
                }}
              >
                <Box className={classes.logoDrawer}>
                  <img
                    className={classes.logo}
                    src={process.env.PUBLIC_URL + "/images/logo-1.png"}
                    alt="Logo"
                  />
                </Box>
                <Box>{NavData(navText, accordion, classes, expanded)}</Box>
                <Box className={classes.socialWrapper}>
                  <Facebook className={classes.social} />
                  <Twitter className={classes.social} />
                  <LinkedIn className={classes.social} />
                  <Instagram className={classes.social} />
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </AppBar>
}
      {/* {tabView && <div>Tab</div>} */}
      {!mobileView && !tabView && <div>Desktop</div>}
    </div>
  );
};

export default Header;
