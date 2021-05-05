import React from "react";

const Status = () => {
  return (
    <div
      class="section-full text-white bg-img-fix content-inner overlay-black-dark counter-staus-box"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg1.jpg)`,
      }}
    >
      <div class="container">
        <div class="row">
          <div
            class="col-md-3 col-lg-3 col-sm-6 col-6 m-b30 wow fadeInUp counter-style-5"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div class="icon-bx-wraper center">
              <div class="icon-content">
                <h2 class="dlab-tilte counter">1226</h2>
                <p>Happy Students</p>
              </div>
            </div>
          </div>
          <div
            class="col-md-3 col-lg-3 col-sm-6 col-6 m-b30 wow fadeInUp counter-style-5"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
          >
            <div class="icon-bx-wraper center">
              <div class="icon-content">
                <h2 class="dlab-tilte counter">1552</h2>
                <p>Approved Courses</p>
              </div>
            </div>
          </div>
          <div
            class="col-md-3 col-lg-3 col-sm-6 col-6 m-b30 wow fadeInUp counter-style-5"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div class="icon-bx-wraper center">
              <div class="icon-content">
                <h2 class="dlab-tilte counter">1156</h2>
                <p>Certified Teachers</p>
              </div>
            </div>
          </div>
          <div
            class="col-md-3 col-lg-3 col-sm-6 col-6 m-b30 wow fadeInUp counter-style-5"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div class="icon-bx-wraper center">
              <div class="icon-content">
                <h2 class="dlab-tilte counter">2100</h2>
                <p>Graduate Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
