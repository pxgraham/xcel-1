import React from 'react';
import './index.css';

function Contact() {
  return (
    <div className="container">
        <div className="pane ma">
          <h1>Get in touch</h1>
          <div className="paneContent">
            <br />
            <input className="contactField" placeholder="name"/>
            <input className="contactField" placeholder="email"/>
            <br />
            <br />
            <textarea className="contactTextField" placeholder="message" cols="68" rows="10"></textarea>
            <br />
            <button class="cBtn">Send</button>
            <br /><br /><br />
          </div>
        </div>
    </div>
    
    
  );
}

export default Contact;
