import React from 'react';
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
const Teacher = ({teacherObj, title, description}) => {
    return ( 
        <div className="section-full bg-gray content-inner">
				<div className="container">
					<div className="section-head text-center ">
						<h2 className="title">{title}</h2>
						<p>{description}</p>
					</div>
                    <div className = "row">
                    {teacherObj.map(item=>(
                        <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="dlab-box m-b30 dlab-team1">
                            <div className="dlab-media">
                                <a href="teachers-profile.html">
                                    <img width="358" height="460" alt="" src={item.image} className="lazy" />
                                </a>
                            </div>
                            <div className="dlab-info">
                                {/*eslint-disable-next-line*/}
                                <h4 className="dlab-title"><a href="https://www.google.com">{item.name}</a></h4>
                                <span className="dlab-position">{item.role}</span>
                                <ul className="dlab-social-icon dez-border">
                                    {/*eslint-disable-next-line*/}
                                    <li><a className="fa fa-facebook" href="https://www.google.com"></a></li>
                                     {/*eslint-disable-next-line*/}
                                    <li><a className="fa fa-twitter" href="https://www.google.com"></a></li>
                                     {/*eslint-disable-next-line*/}
                                    <li><a className="fa fa-linkedin" href="https://www.google.com"></a></li>
                                     {/*eslint-disable-next-line*/}
                                    <li><a className="fa fa-pinterest" href="https://www.google.com"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    ))}
                    </div>
                    </div>
                    </div>
     );
}
 
export default Teacher;