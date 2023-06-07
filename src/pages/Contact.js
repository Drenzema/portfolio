import "../assets/allpages/Contact.css";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";

export const Contact = () => {
  const { ref: contactRef, inView: contactIsVisible } = useInView({triggerOnce: true});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");
  const form = useRef();

  const validateInputs = () => {
    const currentErrors = {};

    if (!name.trim()) {
      currentErrors.name = "Name is required";
    }

    if (!email.trim()) {
      currentErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      currentErrors.email = "Invalid email";
    }

    if (!message.trim()) {
      currentErrors.message = "Message is required";
    }

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      emailjs
        .sendForm(
          "service_3dmo1k3",
          "template_s9iva4w",
          form.current,
          "cNH1wAgQFM2dM-cIZ"
        )
        .then(
          (result) => {
            e.target.reset();
            setErrors({});
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Element className={`contact container `} name="contact">
      <div
        className={`forms ${contactIsVisible ? "animate-slideIn-fast" : ""}`}
        ref={contactRef}
      >
        <h1>contact me</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <label>Email</label>
          <input
            type="email"
            value={email}
            name="user_email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <label>Message</label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && <p className="error">{errors.message}</p>}
          <input type="submit" value="Send" />
        </form>
      </div>
    </Element>
  );
};

export default Contact;
