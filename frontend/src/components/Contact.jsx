import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/message/send",
        {
          name,
          email,
          subject,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      // Check if success is true and display the success message
      if (res.data.success) {
        toast.success(res.data.message); // Show success toast
        // Clear the form fields
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      } else {
        // If success is false, show the error message
        toast.error(res.data.message); // Show error toast
      }
    } catch (error) {
      // Display the error toast if the request fails (server-side errors)
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <>
      <div className="contact container">
        <Toaster /> {/* Add this to render the toast notifications */}
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>South Bombay, Mumbai, 400001</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call Us: +91-998972832</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>lynal@gmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377496.10214234186!2d72.8346506!3d18.9218471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7d8b0b4aeb5%3A0x93a785d9db51b073!2sGateway%20of%20India%2C%20Mumbai%2C%20Maharashtra%20400001%2C%20India!5e0!3m2!1sen!2sus!4v1709101961860!5m2!1sen!2sus"
              style={{ border: 0, width: "100%", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                rows={10}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
