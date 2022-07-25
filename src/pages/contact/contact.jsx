import { useState } from 'react';
import './contact.css';

export default function Contact() {
  const [btnclicked, setBtnclicked] = useState(false);
  const clickHandler = () => {
    setBtnclicked(true);
  };

  return (
    <div className="contact">
      {!btnclicked ? (
        <div id="container">
          <div class="form-wrap">
            <h1>Contact Us</h1>
            <p>Questions, bug reports,feedback -- We're here for it all</p>
            <form className="contact-form">
              <div class="form-group">
                <label for="email">Your Email Address</label>
                <input type="email" id="email" placeholder="you@gmail.com" />
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" title="firstname" id="first-name" />
              </div>
              <div class="form-group">
                <label for="help">How can we help?</label>
                <textarea
                  type="text"
                  name="lastname"
                  id="last-name"
                  rows={5}
                  cols={61}
                />
              </div>
              <button type="submit" class="btn" onClick={clickHandler}>
                SEND
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="contact-submitted">
          <h1>Thank you for your feedback, we'll get back to you</h1>
        </div>
      )}
    </div>
  );
}
