import React from 'react';
import { Main, Popular, Parallax, Services, Status,Teacher, Testimonial, BlogComponent} from '../components/index';
// import {makeStyles} from '@material-ui/core'

// const useStyles = makeStyles((theme)=>({
//     parentHeight:{
//         flexGrow: 1,
//         marginTop: 0,
//         height: 500,
//       }
// }))
// const parallax1Image =` ${process.env.PUBLIC_URL}/images/para1.png`
// const parallax1Image =` ${process.env.PUBLIC_URL}/images/para1.png`
function Home () {
        // const classes = useStyles()
        return ( 
            <div> 
               <Main />
               <Popular />
               <Parallax />
               <Services />
               <Status />
               <Teacher />
               <Testimonial />
               <BlogComponent />
            </div>
         );
}
 
export default Home;