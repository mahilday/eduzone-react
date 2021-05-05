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
const teacherObj = [
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
function Home () {
        // const classes = useStyles()
        return ( 
            <div> 
               <Main />
               <Popular />
               <Parallax />
               <Services />
               <Status />
               <Teacher teacherObj ={teacherObj} title="Meet The Teachers" description="There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer."/>
               <Testimonial />
               <BlogComponent />
            </div>
         );
}
 
export default Home;