import { useState } from "react";
import { motion } from "framer-motion";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How do I schedule a pickup?",
      answer: "Fill the registration form, choose your preferred date, and our team will collect your recyclables from home."
    },
    {
      question: "What kind of waste can I hand over?",
      answer: "We accept dry recyclables, paper, plastic, glass and electronic waste through our local pickup service."
    },
    {
      question: "Is there a pickup fee?",
      answer: "No, our doorstep collection service is completely free for registered residential users."
    },
    {
      question: "How can I check my recycling impact?",
      answer: "Your recycled tonnage and community contribution are shown in our impact section after registration."
    }
  ];

  return (
    <section id="faq">
      <div className="container">
        <h2 className="title">Frequently Asked Questions</h2>
        <p className="subtitle">
          Quick answers to help you start recycling with confidence.
        </p>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <motion.div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => setActiveIndex(index)}
              >
                {item.question}
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
