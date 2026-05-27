import { motion } from "framer-motion";
import { FaCalendarCheck, FaHandsHelping, FaLeaf, FaMedal } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaCalendarCheck />,
      title: "Pickup Scheduling",
      desc: "Select a date and time for our green team to collect your recyclable waste."
    },
    {
      icon: <FaHandsHelping />,
      title: "Segregation Guidance",
      desc: "Learn exactly how to sort dry, wet and e-waste for faster recycling."
    },
    {
      icon: <FaLeaf />,
      title: "Eco Rewards",
      desc: "Earn community points with every successful pickup and help local causes."
    },
    {
      icon: <FaMedal />,
      title: "Impact Tracking",
      desc: "See the local recycling impact in real time with simple, clear metrics."
    }
  ];

  return (
    <section id="services">
      <div className="container">
        <h2 className="title">Our Services</h2>
        <p className="subtitle">
          Everything you need to make green living easy in Gandhinagar.
        </p>

        <div className="services-grid">
          {services.map((item, index) => (
            <motion.div
              className="service-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
