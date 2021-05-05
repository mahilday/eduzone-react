import React from "react";
import { makeStyles } from "@material-ui/core";
import { Facebook, Twitter, LinkedIn, Instagram } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  subscribe: {
    background: "#2ec4b6",
    color: "#fff",
  },
  subCont: {
    display: "flex",
    padding: "3% 0",
    justifyContent: "space-between",
    alignItems: "center",
  },
  submail: {
    width: "40%",
    textAlign: "left",
  },
  writeup: {
    width: "50%",
    textAlign: "left",
  },
}));
// const copyRight = (classes) => {
//   return (
//     <div>
//       <div className="container"></div>
//     </div>
//   );
// };
const subscribeToEmail = (classes) => {
  return (
    <div class="section-full p-tb50 bg-primary text-white">
		<div class="container">
			<div class="row align-items-center" style ={{textAlign: "left"}}>
				<div class="col-md-7 m-md-b30">
					<h4>Subscribe To Our Newsletter</h4>
					<p class="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
				</div>
				<div class="col-md-5">
					<h4>Your Email Address</h4>
					<form class="dzSubscribe style1" action="script/mailchamp.php" method="post">
						<div class="dzSubscribeMsg"></div>
						<div class="input-group">
							<input name="dzEmail" required="required" type="email" class="form-control" placeholder="Your Email Address"/>
							<div class="input-group-addon">
								<button name="submit" value="Submit" type="submit" class="site-button-secondry btnhover13">Subscribe</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
  );
};
const main = () => {
  return (
    <div className="footer-top">
      <footer class="site-footer footer-full">
        <div class="p-tb60">
          <div class="container">
            <div class="row">
              <div class="col-md-6 text-md-left text-center footer-logo">
                <img src="images/logo-white.png" alt="" width="250" />
                <p class="m-b0 m-t10">Copyright © 2020 DexignZone</p>
              </div>
              <div class="col-md-6 text-md-right text-center">
                <div class="widget-link ">
                  <ul>
                    <li>
                      <a href="https://google.com">Home</a>
                    </li>
                    <li>
                      <a href="https://google.com">About us</a>
                    </li>
                    <li>
                      <a href="https://google.com">Help Desk</a>
                    </li>
                    <li>
                      <a href="https://google.com">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="https://google.com">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <ul class="list-inline m-b0 m-t10">
                  <li>
                    <a
                      href="https://google.com"
                      class="site-button-link facebook hover"
                    >
                      <Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://google.com"
                      class="site-button-link google-plus hover"
                    >
                      <Instagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://google.com"
                      class="site-button-link instagram hover"
                    >
                      <LinkedIn />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://google.com"
                      class="site-button-link twitter hover"
                    >
                      <Twitter />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      {subscribeToEmail(classes)} {main(classes)}
    </div>
  );
};

export default Footer;
