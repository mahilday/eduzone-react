import React, { createContext, Component } from "react";

export const HomeContext = createContext();

class HomeContextProvider extends Component {
    constructor(props) {
      super(props);
      this.state = {}
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