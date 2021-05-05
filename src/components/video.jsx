import React from 'react';
const Video = () => {
    return ( 
        <div className="section-full content-inner bg-white wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
				<div className="container">
					<div className="row about-one align-items-center">
						<div className="col-lg-6 m-b30">
							<div className="about-img">
								<img src="images/about1.jpg" alt="" />
								<div className="video-bx">
									<a href="https://www.youtube.com/watch?v=_FRZVScwggM" className="popup-youtube bg-primary"><i className="fa fa-play"></i></a>
								</div>
								<div className="info-bx">
									<p>About EduZone</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6 m-b30">
							<div className="content-bx">
								<h2 className="m-b15 title">A company involved in<br /><span className="text-primary"> service, maintenance</span></h2>
								<p className="m-b20">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>											
								<h6 className="m-b20">Best Education For EduZone University</h6>
								<div className="d-flex align-items-center">
									<a href="https://www.google.com" className="site-button m-r30 radius-no">Read More</a>
									<div className="phone">
										<i className="fa fa-volume-control-phone"></i>
										<span>+91 (123) 456 7890</span>
									</div>
								</div>
							</div>
						</div>
					</div>	
				</div>
			</div>
     );
}
 
export default Video;