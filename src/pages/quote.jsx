import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/quote.css";
const Quote = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k051j6k",
        "template_cip0z08",
        form.current,
        "Z3Cb-Ix6hs1q6CQcr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="reqBox" ref={form} onSubmit={sendEmail}>
      <div className="businessInfo">
        <h1>Business Information</h1>
        <div className="inputBox">
          <label>Name</label>
          <input type="text" name="user_name" />
        </div>
        <div className="inputBox">
          <label>Email</label>
          <input type="email" name="user_email" />
        </div>
        <div className="inputBox">
          <label>Phone</label>
          <input type="number" name="user_phone" />
        </div>
        <div className="inputBox">
          <label>Business Name</label>
          <input type="text" name="user_business" />
        </div>
        <div className="inputBox">
          <label>Address</label>
          <input type="text" name="user_address" />
        </div>
        <div className="inputBox">
          <label>City</label>
          <input type="text" name="user_city" />
        </div>
        <div className="inputBox">
          <label>State</label>
          <input type="text" name="user_state" />
        </div>
        <div className="inputBox">
          <label>Zip Code</label>
          <input type="text" name="user_zip" />
        </div>
      </div>
      <div className="quoteInfo">
        <h1>Quote Details</h1>
        <textarea name="message" />
        <input type="submit" value="REQUEST" />
      </div>
    </form>
  );
};

export default Quote;
