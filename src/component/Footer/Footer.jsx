import React, { Fragment } from "react";
import "./Footer.css";
const Footer = () => (
  <Fragment>
    <footer className="mainfooter" role="contentinfo">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="footer-pad">
                <h4>About FoodParadise</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">About US</a>
                  </li>
                  <li>
                    <a href="#">Contact US</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="footer-pad">
                <h4>Support</h4>
                <ul className="list-unstyled ">
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Help Desk</a>
                  </li>
                  <li>
                    <a href="#">Forums</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="footer-pad">
                <h4>Download App</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Google Play</a>
                  </li>
                  <li>
                    <a href="#">App Store</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div classNameName="row">
            <div className="col-md-12 text-center">
              <h4>Follow Us</h4>
              <ul className="social-network social-circle">
                <li>
                  <a href="#" className="icoFacebook" title="Facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="icoInstagram" title="Facebook">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="icoGoogle" title="Linkedin">
                    <i className="fa fa-google"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-12 copy">
              <p className="text-center">
                &copy; Copyright 2020 - Food Paradise. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </Fragment>
);
export default Footer;
