import React, { Component } from 'react';
import {Header} from '../components/index';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
               <Header /> 
            </div>
         );
    }
}
 
export default Home;