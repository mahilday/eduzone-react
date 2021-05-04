import React, { createContext, Component } from "react";

export const HomeContext = createContext();
const publicUrl = process.env.PUBLIC_URL;
class HomeContextProvider extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
          popularCourses:[
              {
                  imageUrl:`${publicUrl}/images/pic1.jpg`,
                  title:"Learn Python – Interactive Python Tutorial",
                  description:"Lorem Ipsum is simply dummy text of the printing and typesetting.",
                  studentNum: 10,
                  price: "$79.00",
              },
              {
                imageUrl:`${publicUrl}/images/pic2.jpg`,
                title:"Learn Python – Interactive Python Tutorial",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting.",
                studentNum: 10,
                price: "$79.00",
            },
            {
                imageUrl:`${publicUrl}/images/pic3.jpg`,
                title:"Learn Python – Interactive Python Tutorial",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting.",
                studentNum: 10,
                price: "$79.00",
            },
            {
                imageUrl:`${publicUrl}/images/pic4.jpg`,
                title:"Learn Python – Interactive Python Tutorial",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting.",
                studentNum: 10,
                price: "$79.00",
            }
          ]
      }
    }
render(){
    return(
        <HomeContext.Provider  value ={{ ...this.state,}}>
            {this.props.children}
        </HomeContext.Provider>
    )
}
}
export default HomeContextProvider;