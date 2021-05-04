import React from 'react';
import {Header, Main, Popular} from '../components/index';
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    parentHeight:{
        flexGrow: 1,
        marginTop: 0,
        height: 500,
      }
}))
function Home () {
        const classes = useStyles()
        return ( 
            <div>
               <Header /> 
               <Main />
               <div style={{marginTop: "-10vh"}}><Popular /></div>
            </div>
         );
}
 
export default Home;