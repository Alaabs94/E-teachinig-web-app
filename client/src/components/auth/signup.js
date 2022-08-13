import React from "react";
import {connect} from "react-redux";
import Contacts from "../../UI-components/contacts";
function Signup() {
  return (

    <section className="contact-page spad pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-form-warp">
              <div className="section-title text-white text-left">
                <h2>Get in Touch</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. </p>
              </div>
              <form className="contact-form">
                <input type="text" placeholder="Your Name"/>
                <input type="text" placeholder="Your E-mail"/>
                <input type="text" placeholder="Subject"/>
                <textarea placeholder="Message"></textarea>
                <button className="site-btn">Sent Message</button>
              </form>
            </div>
          </div>
          {/* begin */}
          <Contacts/>
          {/* end */}
        </div>
      
      </div>
    </section>

  
   
  );
}

export default Signup;
