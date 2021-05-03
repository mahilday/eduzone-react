import React, { createContext, Component, createRef } from "react";

export const GeneralContext = createContext();
const mobileVp = 592;
const tabVp = 1100;
class GeneralContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileView: false,
      desktopView: false,
      tabView: false,
      drawerOpen: false,
      expanded: false,
      TabActive: 0,
      navText: [
        { label: "Home", exact: "Home", href: "#" },
        { label: "Features", exact: "Features", href: "#" },
        { label: "Pages", exact: "Pages", href: "#" },
        { label: "Shop", exact: "Shop", href: "#" },
        { label: "Blog", exact: "Blog", href: "#" },
        { label: "Element", exact: "Element", href: "#" },
        { label: "Contact Us", exact: "Contact Us", href: "#" },
      ],
      contact : {
        phone: "+00 888 6668811",
        location: "1073 W Stephen Ave, Clawson",
        time: "Mon - Sat 8.00 - 18.00 ",
        email: "info@example.com",
      },
    };
  }

  handleDrawerOpen = () => {
    this.setState((prevState) => ({ ...prevState, drawerOpen: true }));
  };
  handleDrawerClose = () => {
    this.setState((prevState) => ({ ...prevState, drawerOpen: false }));
  };
  handleAccordion = (panel) => (event, isExpanded) => {
    this.setState((prevState)=>({ expanded: isExpanded ? panel : false }));
  };

  setMobileResponsiveness = () => {
    return window.innerWidth <= mobileVp
      ? this.setState((prevState) => ({ ...prevState, mobileView: true }))
      : this.setState((prevState) => ({ ...prevState, mobileView: false }));
  };
  setTabResponsiveness = () => {
    return window.innerWidth < tabVp && window.innerWidth > mobileVp
      ? this.setState((prevState) => ({ ...prevState, tabView: true }))
      : this.setState((prevState) => ({ ...prevState, tabView: false }));
  };
  setDesktopResponsiveness = () => {
    return window.innerWidth > tabVp
      ? this.setState((prevState) => ({ ...prevState, desktopView: true }))
      : this.setState((prevState) => ({ ...prevState, desktopView: false }));
  };
  handleNavChange=(event, newValue)=> {
    this.setState((prevState) => ({ ...prevState, TabActive: newValue }));
    };
  componentDidMount() {
    //eslint-disable-next-line
    const node = this.wrapper.current;
    
    /* Uses DOM node  */ 
}

wrapper = createRef();

  render() {
    return (
      <GeneralContext.Provider ref={this.wrapper}
        value={{
          ...this.state,
          tabResponsiveness: this.setTabResponsiveness,
          mobileResponsiveness: this.setMobileResponsiveness,
          desktopResponsiveness: this.setDesktopResponsiveness,
          setDrawerOpen: this.handleDrawerOpen,
          setDrawerClose: this.handleDrawerClose,
          accordion: this.handleAccordion,
          handleNavChange: this.handleNavChange,
        }}
      >
        {this.props.children}
      </GeneralContext.Provider>
    );
  }
}

export default GeneralContextProvider;
