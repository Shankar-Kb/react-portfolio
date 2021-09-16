import React from 'react';

const Header = () => {

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm Bhavani Shankar.</h1>
            <h3>I'm a Chennai based <span>Full Stack developer</span>. My specialization is in MERN stack. 
            Extremely motivated to constantly develop my skills and grow professionally. Seeking to leverage my technical expertise to learn and adapt to new technologies in the face of an ever growing market.</h3>
            <hr />
            <ul className="social">       
              {/* <li><a href="https://www.facebook.com/Mr.shank"><i className="fa fa-facebook"></i></a></li> */}
              <li><a href="https://www.linkedin.com/in/bhavani-shankar-k-8240561bb"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="https://github.com/Shankar-Kb"><i className="fa fa-github"></i></a></li>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
}

export default Header;
