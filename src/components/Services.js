import React from 'react';
const images = `${process.env.PUBLIC_URL}/images`
const Services = () => {
    return ( 
        <div class="section-full bg-white content-inner">
				<div class="container">
					<div class="row service-area-one">
						<div class="col-lg-4 m-b30 hidden-sm">
                            <div class="rdx-thu"><img src={`${images}/student1.png`} alt="" /></div>
                        </div>
                        <div class="col-lg-8">
                            <div class="section-head">
								<h2 class="title"> Welcome To University</h2>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							</div>
                            <div class="row"> 
                                <div class="col-md-6 col-sm-6 m-b30">
									<div class="icon-bx-wraper left">
										<div class="icon-bx-xs bg-secondry radius"> <a href="https://www.google.com" class="icon-cell"><i class="fa fa-paint-brush"></i></a> </div>
										<div class="icon-content">
											<h5 class="rdx-tilte">Special Education</h5>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam..</p>
										</div>
									</div>
								</div>
								<div class="col-md-6 col-sm-6 m-b30">
									<div class="icon-bx-wraper left">
										<div class="icon-bx-xs bg-secondry radius"> <a href="https://www.google.com" class="icon-cell"><i class="fa fa-calendar"></i></a> </div>
										<div class="icon-content">
											<h5 class="rdx-tilte">Events</h5>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam..</p>
										</div>
									</div>
								</div>
								<div class="col-md-6 col-sm-6 m-b30">
									<div class="icon-bx-wraper left">
										<div class="icon-bx-xs bg-primary radius"> <a href="https://www.google.com" class="icon-cell"><i class="fa fa-book"></i></a> </div>
										<div class="icon-content">
											<h5 class="rdx-tilte">Full Day Session</h5>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam..</p>
										</div>
									</div>
								</div>
								<div class="col-md-6 col-sm-6 m-b30">
									<div class="icon-bx-wraper left">
										<div class="icon-bx-xs bg-primary radius"> <a href="https://www.google.com" class="icon-cell"><i class="fa fa-graduation-cap"></i></a> </div>
										<div class="icon-content">
											<h5 class="rdx-tilte">Pre Classes </h5>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam..</p>
										</div>
									</div>
								</div>
								<div class="col-md-6 col-sm-6 m-b30">
									<div class="icon-bx-wraper left">
										<div class="icon-bx-xs bg-secondry radius"> <a href="https://www.google.com" class="icon-cell"><i class="fa fa-user"></i></a> </div>
										<div class="icon-content">
											<h5 class="rdx-tilte">Qualified Teachers</h5>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam..</p>
										</div>
									</div>
								</div>
								<div class="col-md-6 col-sm-6 m-b30">
									<div class="icon-bx-wraper left serb">
										<div class="icon-bx-xs bg-secondry radius"> <a href="https://www.google.com" class="icon-cell"><i class="fa fa-clock-o"></i></a> </div>
										<div class="icon-content">
											<h5 class="rdx-tilte">24/7 Supports</h5>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam..</p>
										</div>
									</div>
								</div>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
     );
}
 
export default Services;