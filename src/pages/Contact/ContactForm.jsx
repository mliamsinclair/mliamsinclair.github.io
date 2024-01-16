import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

function ContactForm() {
  const [contact, setContact] = useState({
    name: "",
    company: "",
    email: "",
    content: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_496tyjr", "contact_form", contact, "gPiDy_jR_b1uYC7cn")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitted(true);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );

    setContact({
      name: "",
      company: "",
      email: "",
      content: "",
    });
  };

  return (
    <div className="contact-form">
      {isSubmitted && <p>Sent!</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={contact.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="company"
          type="text"
          value={contact.company}
          onChange={handleChange}
          placeholder="Company"
          required
        />
        <input
          name="email"
          type="email"
          value={contact.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <textarea
          name="content"
          value={contact.content}
          onChange={handleChange}
          placeholder="Content"
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
