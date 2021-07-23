import React, {useState} from 'react';

const Contact = () => {

   const [contactName, setContactName] = useState("");
   const [contactEmail, setContactEmail] = useState("");
   const [contactSubject, setContactSubject] = useState("");

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">You can send me a message down below</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" value={contactName} size="35" id="contactName" name="contactName" onChange={(e) => setContactName(e.target.value)}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" value={contactEmail} size="35" id="contactEmail" name="contactEmail" onChange={(e) => setContactEmail(e.target.value)}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" value={contactSubject} size="35" id="contactSubject" name="contactSubject" onChange={(e) => setContactSubject(e.target.value)}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   Bhavani Shankar K<br />
						   NPL Agastya Apartments <br />
						   Chennai, Tamil Nadu Chennai-600081<br />
						   <span>9710080555</span>
					   </p>
				   </div>

            </aside>
      </div>
   </section>
    );
}

export default Contact;
