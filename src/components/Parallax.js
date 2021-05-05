import React from "react";



const Parallax = (props) => {
 
  return (
    // 
    <div class="section-full bg-img-fix content-inner-2 overlay-black-dark contact-action style2" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/images/paraBg.jpg)`, textAlign:"left",}}>
				<div class="container">
					<div class="row relative">
						<div class="col-md-12 col-lg-8 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
							<div class="contact-no-area">
								<h2 class="title">Create your free account now and get immediate access to 100s of online courses.</h2>
								<form action="script/mailchamp.php" method="post" class="dzSubscribe subscribe-box row align-items-center sp15">
									<div class="col-lg-12">
										<div class="dzSubscribeMsg"></div>
									</div>
									<div class="col-lg-4 col-md-4">
										<div class="input-group">
											<input name="dzName" required="required" type="text" class="form-control" placeholder="Your Name " />
										</div>
									</div>
									<div class="col-lg-4 col-md-4">
										<div class="input-group">
											<input name="dzEmail" required="required" type="email" class="form-control" placeholder="Your Email Address" />
										</div>
									</div>
									<div class="col-lg-4 col-md-4">
										<div class="input-group">
											<button name="submit" value="Submit" type="submit" class="site-button btn-block btnhover13">Subscribe</button>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div class="col-md-12 col-lg-4 contact-img-bx wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.2s">
							<img src={`${process.env.PUBLIC_URL}/images/para1.png`} alt="" />	
						</div>
					</div>
				</div>
			</div>
  );
};

export default Parallax;
