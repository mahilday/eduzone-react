import React from 'react';
import {Header, Main} from '../components/index';
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    parentHeight:{
        flexGrow: 1,
        marginTop: 0,
        height: 500,
      },
}))
function Home () {
        const classes = useStyles()
        return ( 
            <div className = {classes.parentHeight}>
               <Header /> 
               <Main />
            </div>
         );
}
 
export default Home;