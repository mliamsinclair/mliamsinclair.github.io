import React from "react";
import "./Contact.css";
import contactIcon from "./contact-icon.svg";
import ContactForm from "./ContactForm.jsx";

function Contact({ id, title }) {
  return (
    <div className="Contact" id={id}>
      <div className="contact-icon-title">
        <img src={contactIcon} alt="About Icon" className="contact-icon" />
        <h1>{title}</h1>
      </div>
      <ContactForm />
    </div>
  );
}

export { Contact };