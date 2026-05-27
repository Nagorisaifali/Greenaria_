import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent. Our team will contact you soon.");
    setContact({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <ToastContainer />
      <div className="container">
        <h2 className="title">Contact Us</h2>
        <p className="subtitle">
          Have a question or want a pickup right away? Send us a message and we will respond fast.
        </p>

        <div className="contact-grid">
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Get in Touch</h3>
            <p>Phone: +91 7869043178</p>
            <p>Email: support@greengandhinagar.com</p>
            <p>Office: Sector 11, Gandhinagar</p>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <input
              name="name"
              value={contact.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={contact.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              value={contact.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />
            <button className="btn" type="submit">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
