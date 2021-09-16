import React from 'react';

const Portfolio = () => {


    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://simple-blog-site-frontend.netlify.app" title="Simple Blog Site">
                    <img alt="Project Thumbnail" src="images/portfolio/simple-blog-site-thumbnail.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Simple Blog Site</h5>
                        <p>A blog site made with MERN stack</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="fa fa-link"></i></div>
                  </a>
                </div>
              </div>

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://aoe2-team-civ-picker.netlify.app" title="Simple Blog Site">
                    <img alt="Project Thumbnail" src="images/portfolio/aoe2-team-civ-picker-thumbnail.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>AOE 2 Team Civ Picker</h5>
                        <p>A random team generator site made with Javascript</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="fa fa-link"></i></div>
                  </a>
                </div>
              </div>
            </div>

          </div>
      </div>
   </section>
    );
}

export default Portfolio;
