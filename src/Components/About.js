import React from 'react';

const About = () => {

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            {/* <img className="profile-pic" src="/images/profile-pic.jpg" alt="Profile Pic" /> */}
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>An aspiring MERN stack developer</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Bhavani Shankar K</span><br />
						   <span>NPL Agastya Apartments<br />
						         Chennai Tamil Nadu, 600081
                   </span><br />
						   <span>9710080555</span><br />
                     <span>shankar.kb95@gmail.com</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href="https://drive.google.com/file/d/1yk6YDoRMAYWJf9o3WofoXt07EDMmOWPL/view?usp=sharing" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );

}

export default About;
