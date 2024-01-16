import React from "react";
import "./Contact.css";
import contactIcon from "./contact-icon.svg";
import ContactForm from "./ContactForm.jsx";

function Contact({ id, title }) {
  return (
    <div className="Contact" id={id}>
      <div className="page-icon-title">
        <img src={contactIcon} alt="About Icon" className="page-icon" />
        <h1>{title}</h1>
      </div>
      <p>Feel free to reach out to me at </p>
      <ContactForm />
    </div>
  );
}

export { Contact };