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
      teacherObj : [
        {
            image:`${process.env.PUBLIC_URL}/images/teach1.jpg`,
            name: "Nashid Martinez",
            role: "Director",
        },
        {
            image:`${process.env.PUBLIC_URL}/images/teach2.jpg`,
            name: "Konne Blackfield",
            role: "Designer",
        },
        {
            image:`${process.env.PUBLIC_URL}/images/teach3.jpg`,
            name: "Hackson Willingham",
            role: "Developer",
        },
        {
            image:`${process.env.PUBLIC_URL}/images/teach5.jpg`,
            name: "Dunez Boni",
            role: "Manager",
        },
    ]
    };
  }
  render() {
    return (
      <>
        <Banner title="About" links={this.state.links} />
        <Video />
        <Status />
        <Teacher teacherObj = {this.state.teacherObj} title="Our Teachers" description="There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer." />
        <BlogComponent />
      </>
    );
  }
}

export default About;
