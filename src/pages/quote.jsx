import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
    <form classname="quoteBox" ref={form} onSubmit={sendEmail}>
      <div className="businessInfo">
        <h1>Business Information</h1>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Phone</label>
        <input type="number" name="user_phone" />
        <label>Business Name</label>
        <input type="text" name="user_business" />
        <label>Address</label>
        <input type="text" name="user_address" />
        <label>City</label>
        <input type="text" name="user_city" />
        <label>State</label>
        <input type="text" name="user_state" />
        <label>Zip Code</label>
        <input type="text" name="user_zip" />
      </div>
      <div className="quoteInfo">
        <h1>Quote Details</h1>
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </div>
    </form>
  );
};

export default Quote;
