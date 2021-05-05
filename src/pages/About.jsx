import React, { Component } from "react";
import {
  Status,
  Teacher,
  BlogComponent,
  Banner,
  Video,
} from "../components/index";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { name: "Home", nav: "/" },
        { name: "About", nav: "/about" },
      ],
    };
  }
  render() {
    return (
      <>
        <Banner title="About" links={this.state.links} />
        <Video />
        <Status />
        <Teacher />
        <BlogComponent />
      </>
    );
  }
}

export default About;
