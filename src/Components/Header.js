import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <div className="header">
          <div className="header_white_section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="header_information">
                    <ul>
                      <li><img src="assets/images/1.png" alt="#" /> 145.street road new York</li>
                      <li><img src="assets/images/2.png" alt="#" /> +71  5678954378</li>
                      <li><img src="assets/images/3.png" alt="#" /> Demo@hmail.com</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div className="full">
                  <div className="center-desk">
                    <div className="logo"> <Link to="/"><img src="assets/images/logo-2.png" alt=""/></Link> </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <div className="menu-area">
                  <div className="limit-box">
                    <nav className="main-menu">
                      <ul className="menu-area-main">
                        <li className="active"> <Link to="/">Home</Link> </li>
                        <li> <Link to="/about">About</Link> </li>
                        <li><Link to="/travel">Travel</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><a href="#contact">Contact Us</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;
