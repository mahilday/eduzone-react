import React, { Component } from "react";
import { Teacher, Banner } from "../components";

class TeachersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [
        {
          image: `${process.env.PUBLIC_URL}/images/teach1.jpg`,
          name: "Nashid Martinez",
          role: "Director",
        },
        {
          image: `${process.env.PUBLIC_URL}/images/teach2.jpg`,
          name: "Konne Blackfield",
          role: "Designer",
        },
        {
          image: `${process.env.PUBLIC_URL}/images/teach3.jpg`,
          name: "Hackson Willingham",
          role: "Developer",
        },
        {
          image: `${process.env.PUBLIC_URL}/images/teach5.jpg`,
          name: "Dunez Boni",
          role: "Manager",
        },
        {
          image: `${process.env.PUBLIC_URL}/images/teach1.jpg`,
          name: "Nashid Martinez",
          role: "Director",
        },
        {
          image: `${process.env.PUBLIC_URL}/images/teach2.jpg`,
          name: "Konne Blackfield",
          role: "Designer",
        },
        {
          image: `${process.env.PUBLIC_URL}/images/teach3.jpg`,
          name: "Hackson Willingham",
          role: "Developer",
        },
        {
          image: `${process.env.PUBLIC_URL}/images/teach5.jpg`,
          name: "Dunez Boni",
          role: "Manager",
        },
        {
          image: `${process.env.PUBLIC_URL}/images/teach1.jpg`,
          name: "Nashid Martinez",
          role: "Director",
        },
        {
          image: `${process.env.PUBLIC_URL}/images/teach2.jpg`,
          name: "Konne Blackfield",
          role: "Designer",
        },
        {
          image: `${process.env.PUBLIC_URL}/images/teach3.jpg`,
          name: "Hackson Willingham",
          role: "Developer",
        },
        {
          image: `${process.env.PUBLIC_URL}/images/teach5.jpg`,
          name: "Dunez Boni",
          role: "Manager",
        },
      ],
      links: [
        { name: "Home", nav: "/" },
        { name: "Teachers", nav: "/teachers" },
      ],
    };
  }
  render() {
    return (
      <div>
        <Banner links={this.state.links} title="Teachers" />
        <Teacher title="" description="" teacherObj={this.state.teachers} />
      </div>
    );
  }
}

export default TeachersPage;
