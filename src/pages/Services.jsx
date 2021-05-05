import React, { Component } from "react";
import { Status, Services, BlogComponent, Banner } from "../components/index";

class ServicesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { name: "Home", nav: "/" },
        { name: "Services", nav: "/services" },
      ],
    };
  }
  render() {
    return (
      <>
        <Banner title="Services" links={this.state.links} />
        <Services />
        <Status />
        <BlogComponent />
      </>
    );
  }
}

export default ServicesPage;
