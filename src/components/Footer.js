import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="foi-footer text-white">
      <div className="container">
        <div className="row footer-content">
          <div className="col-xl-6 col-lg-7 col-md-8">
            <h2 className="mb-0">
              Do you want to know more or just have a question? write to us.
            </h2>
          </div>
          <div className="col-md-4 col-lg-5 col-xl-6 py-3 py-md-0 d-md-flex align-items-center justify-content-end">
            <a href="contact.html" className="btn btn-danger btn-lg">
              Contact form
            </a>
          </div>
        </div>
        <div className="row footer-widget-area">
          <div className="col-md-3">
            <div className="py-3">
              <img src="assets/images/logo_light.png" style={{height: 40, marginLeft: -15}} alt="Mobicare logo light" />
            </div>
            <p className="font-os font-weight-semibold mb3">Get our mobile app</p>
            <div>
              <button className="btn btn-app-download mr-2">
                <img src="assets/images/ios.svg" alt="App store" />
              </button>
              <button className="btn btn-app-download">
                <img src="assets/images/android.svg" alt="play store" />
              </button>
            </div>
          </div>
          <div className="col-md-3 mt-3 mt-md-0">
            <nav>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Account
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    My tasks
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Edit profile
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Activity
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-3 mt-3 mt-md-0">
            <nav>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="/about-us" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Careers
                    <span className="badge badge-pill badge-secondary ml-2">
                      Hiring
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Shop with us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-3 mt-3 mt-md-0">
            
            <p>All rights reserved.</p>
            <nav className="social-menu">
              <a href="#!">
                <img src="assets/images/facebook.svg" alt="facebook" />
              </a>
              <a href="#!">
                <img src="assets/images/instagram.svg" alt="instagram" />
              </a>
              <a href="#!">
                <img src="assets/images/twitter.svg" alt="twitter" />
              </a>
              <a href="#!">
                <img src="assets/images/youtube.svg" alt="youtube" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
