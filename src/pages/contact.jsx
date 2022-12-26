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
  // <form ref={form} onSubmit={sendEmail}>
  //   <label>Name</label>
  //   <input type="text" name="user_name" />
  //   <label>Email</label>
  //   <input type="email" name="user_email" />
  //   <label>Message</label>
  //   <textarea name="message" />
  //   <input type="submit" value="Send" />
  // </form>

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div class="page">
        <div class="field field_v1">
          <label for="first-name" class="ha-screen-reader">
            First name
          </label>
          <input
            id="first-name"
            class="field__input"
            type="text"
            name="user_name"
            placeholder="e.g. John"
          />
          <span class="field__label-wrap" aria-hidden="true" />
          <span class="field__label">Your Name</span>
        </div>
        <div class="field field_v2">
          <label for="last-name" class="ha-screen-reader">
            E-mail
          </label>
          <input
            id="last-name"
            class="field__input"
            placeholder="e.g. Johnson"
            type="email"
            name="user_email"
          />
          <span class="field__label-wrap" aria-hidden="true">
            <span class="field__label">Email</span>
          </span>
        </div>
      </div>
      <div class="field field_v3">
        <label for="email" class="ha-screen-reader"></label>
        <input
          id="email"
          class="field__input"
          placeholder="e.g. user@email.com"
          name="message"
        />
        <span class="field__label-wrap" aria-hidden="true">
          <span class="field__label">Message</span>
        </span>
      </div>
      <input type="submit" value="Send" disabled="true" />
    </form>
  );
};

export default Contact;
