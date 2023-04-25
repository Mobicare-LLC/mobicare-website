import React from "react";
import { Link } from "react-router-dom";

const HeaderContent = () => {
    return (
        <div className="header-content">
            <div className="row">
                <div className="col-md-6">
                    <h1>Great app that makes your life awesome</h1>
                    <p className="text-dark">He has led a remarkable campaign, defying the traditional mainstream parties courtesy of his En Marche! movement.</p>
                    <button className="btn btn-primary mb-4">Get Started</button>
                    <div className="my-2">
                        <p className="header-app-download-title">GET OUR MOBILE APP</p>
                    </div>
                    <div>
                        <button className="btn btn-app-download mr-2"><img src="assets/images/ios.svg" alt="App store" /></button>
                        <button className="btn btn-app-download"><img src="assets/images/android.svg" alt="play store" /></button>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src="assets/images/app_1.png" alt="app" width="388px" className="img-fluid" />
                </div>
            </div>
        </div>);
}

const Header = ({showHeaderImage}) => {
    // console.log('headerchilldren', content);
    showHeaderImage = showHeaderImage ?? false;

    return (
        <header className={"foi-header landing-header " + (!showHeaderImage ? "alt-header-img": "") }>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light foi-navbar">
                    <Link className="navbar-brand" to="/">
                        <img src="assets/images/logo_long.png" alt="Mobicare" style={{height: 40, marginLeft: -25, marginRight: 25}} />
                    </Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact-us">Contact</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav mt-2 mt-lg-0">
                            <li className="nav-item mr-2 mb-3 mb-lg-0">
                                <a className="btn btn-secondary" href="register.html">Sign up</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-secondary" href="login.html">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {!showHeaderImage ? <></> : 
                    <HeaderContent />
                }
            </div>
        </header>
    );
};

export default Header;
