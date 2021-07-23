import React from 'react';

const Resume = () => {

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
               <div><h3>Dr. MGR University</h3>
                <p className="info">B.Tech in Computer Science <span>&bull;</span><em className="date">June 2016</em></p>
                <p>Developed two projects during my time in computer science engineering</p></div> 
               </div>
            </div>
         </div>
      </div>

      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>Technical Skills
            </p>

                <div className="bars">
                   <ul className="skills">

                      <li><span style={{ width: "75%" }} className='bar-expand html5'></span><em>HTML 5</em></li>
                      <li><span style={{ width: "55%" }} className='bar-expand css3'></span><em>CSS 3</em></li>
                      <li><span style={{ width: "70%" }} className='bar-expand reactjs'></span><em>React JS</em></li>
                      <li><span style={{ width: "65%" }} className='bar-expand node'></span><em>Node</em></li>
                      <li><span style={{ width: "70%" }} className='bar-expand mongo'></span><em>Mongo</em></li>
                      <li><span style={{ width: "60%" }} className='bar-expand git'></span><em>Git</em></li>
                      <li><span style={{ width: "50%" }} className='bar-expand aws'></span><em>AWS</em></li>
                   </ul>
                </div>
			</div>
      </div>
   </section>
    );
}

export default Resume;
