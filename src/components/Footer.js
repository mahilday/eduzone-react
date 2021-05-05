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
    <div className={classes.subscribe}>
      <div className={`${classes.subCont} container`}>
        <section className={classes.writeup}>
          <h4>Subscribe To Our NewsLetter</h4>
          <p>
            Ea non in magna est sint consectetur quis culpa. Incididunt
            cupidatat consequat excepteur excepteur minim non tempor duis
            aliquip officia. Elit consectetur in ullamco ipsum reprehenderit
            ullamco qui consequat. Cupidatat velit mollit ad commodo eiusmod et
            duis ut Lorem non.
          </p>
        </section>
        <section className={classes.submail}>
          <h4 className="text-white">Your Email Address</h4>
          <div>
            <input
              type="text"
              className="input"
              placeholder="Your Email Address"
            />
            <button className="btnSub">Subscribe</button>
          </div>
        </section>
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
