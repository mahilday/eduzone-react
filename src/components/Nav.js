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
  Tab,
  Tabs,
  ThemeProvider,
} from "@material-ui/core";
import {
  Menu,
  SearchOutlined,
  ExpandMore,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  PhoneInTalkOutlined,
  LocationOnOutlined,
  ScheduleOutlined,
  DraftsOutlined,
} from "@material-ui/icons";
import { colorTheme } from "../themes/colorTheme";
import { Link } from "react-router-dom";

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
  socialWrapper: {
    width: "fit-content",
    margin: "20% auto",
  },
  button: {
    "&.MuiButton-root": {
      textTransform: "capitalize",
      color: "#fff",
      fontSize: "12px",
      fontWeight: "600",
    },
    background: "#2ec4b6",
    padding: "0 30px",
  },
  // desktop specific styles
  topNav: {
    background: "#353866",
    color: "#f4f4f4",
    display: "flex",
    justifyContent: "space-around",
    padding: ".3% 0",
    transition: `display .2s ${theme.transitions.easing.easeInOut}`,
  },
  dFlex: {
    display: "flex",
    flexDirection: "row",
    padding: "0 10px",
  },
  icon: {
    color: "#2ec4b6",
    padding: "0 3px",
  },
  parentHeight: {
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  dappBar: {
    "&.MuiAppBar-colorPrimary": {
      backgroundColor: "#ffffff",
      color: "#333333",
    },
    "&.MuiPaper-elevation4": {
      boxShadow: "none",
    },
    // position: "-webkit-sticky", /* Safari */

    display: "flex",
    width: "100%",
    padding: "5px 0",
    justifyContent: "space-around",
  },
  wrapDlogo: {
    width: "30%",
    "@media (max-width: 1022)": {
      width: "40%",
    },
    display: "flex",
    justifyContent: "flex-end",
  },
  dlogoWrapper: {
    width: "75%",
    height: "60%",
  },
  DNav: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-around",
    margin: "0 auto",
    "@media (max-width: 1022)": {
      width: "100%",
    },
  },
  tabWidth: {
    width: "80%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-around",
  },
  dwidth: {
    width: "20%",
  },
  tabRoot: {
    "&.MuiTab-root": {
      minWidth: "70px",
      fontSize: "15px",
      fontWeight: "750",
    },
  },
  donotshow: {
    display: "none",
    transition: `display .2s ${theme.transitions.easing.easeInOut}`,
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
          <Typography variant="subtitle1"><Link to={href}>{exact}</Link></Typography>
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
    contact,
    drawerOpen,
    navText,
    expanded,
    accordion,
    handleNavChange,
    TabActive,
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
    <div className={`${classes.parentHeight}`}>
      {/* mobile and tab view of the navbar */}

      {!desktopView && (
        <AppBar className={` ${classes.appBar}`} position="sticky">
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
              {tabView && !mobileView && (
                <Button className={classes.button}>Apply Now</Button>
              )}
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
      )}
      {/* desktop View  of the navbar*/}

      {!mobileView && !tabView && (
        <ThemeProvider theme={colorTheme}>
          <Box id="topnav" className={classes.topNav}>
            <Box className={classes.dFlex}>
              <Box className={classes.dFlex}>
                <PhoneInTalkOutlined className={classes.icon} />
                {contact.phone}
              </Box>
              <span>|</span>
              <Box className={classes.dFlex}>
                <LocationOnOutlined className={classes.icon} />
                {contact.location}
              </Box>
            </Box>
            <Box className={classes.dFlex}>
              <Box className={classes.dFlex}>
                <ScheduleOutlined className={classes.icon} />
                {contact.time}
              </Box>
              <Box className={classes.dFlex}>
                <DraftsOutlined className={classes.icon} />
                {contact.email}
              </Box>
            </Box>
          </Box>
          <div className={`${classes.parentHeight}`}>
            <AppBar className={` ${classes.dappBar}`} position="sticky">
              <Toolbar className={classes.DNav}>
                <Box className={classes.wrapDlogo}>
                  <Box className={classes.dlogoWrapper}>
                    <img
                      className={classes.logo}
                      src={process.env.PUBLIC_URL + "/images/logo-1.png"}
                      alt="Logo"
                    />
                  </Box>
                </Box>
                <Box className={classes.tabWidth}>
                  <Tabs
                    value={TabActive}
                    onChange={handleNavChange}
                    indicatorColor="primary"
                    textColor="primary"
                    // className={classes.tabWidth}
                    centered
                  >
                    {navText.map((item, index) => (
                     
                        <Tab
                        className={classes.tabRoot}
                        key={index}
                        component={Link}
                        to={item.href}
                        label={item.label}
                    />
                    ))}
                  </Tabs>
                  <Box
                    component="span"
                    className={` ${classes.dwidth} ${classes.dFlex}`}
                  >
                    <Button color="inherit" className={classes.rotate}>
                      <SearchOutlined />
                    </Button>
                    <Button className={classes.button}>Apply Now</Button>
                  </Box>
                </Box>
              </Toolbar>
            </AppBar>
          </div>
        </ThemeProvider>
      )}
    </div>
  );
};

export default Header;
