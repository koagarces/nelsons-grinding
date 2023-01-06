import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/Contact.css";
import { Form } from "react-router-dom";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k051j6k",
        "template_ore7wkg",
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
    <div className="contactPage">
      <div className="contactText">
        <div>
          <h1>Question?</h1>
          <p>
            You have questions and we have answers. Go ahead and send over your
            questions and we will be keen to respond.{" "}
          </p>
        </div>
        <div>
          <h1>Job Seekers</h1>
          <p>
            Interested in a career at Nelson Grinding? Send us a message with
            your resume, full-name, email, number, and availability. We
            encourage all candidates to apply regardless of experience! Make
            sure to bring an eagerness to learn,hardworking mentality and
            patience!
          </p>
        </div>
      </div>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <h1>Send Us a Message!</h1>
        <div className="commInfo contactChild">
          <div className="nameBox commChild">
            <label>Name</label>
            <input type="text" name="user_name" />
          </div>
          <div className="emailBox commChild">
            <label>Email</label>
            <input type="email" name="user_email" />
          </div>
        </div>
        <div className="messInfo contactChild">
          <label>Message</label>
          <textarea className="messText" name="message" />
          <input classname="emailButton" type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
