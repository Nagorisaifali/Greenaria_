import { motion } from "framer-motion";
import { FaRecycle, FaLeaf, FaTruck } from "react-icons/fa";

function Features() {

  const features = [
    {
      icon:<FaTruck />,
      title:"Free Doorstep Pickup",
      desc:"No need to travel or wait."
    },
    {
      icon:<FaRecycle />,
      title:"Easy Segregation",
      desc:"Simple recycling guidance."
    },
    {
      icon:<FaLeaf />,
      title:"Cleaner Gandhinagar",
      desc:"Contribute to a greener future."
    }
  ];

  return (
    <section id="features">

      <div className="container">

        <h2 className="title">
          Why Citizens Love It
        </h2>

        <div className="features-grid">

          {
            features.map((item,index)=>(
              <motion.div
                className="feature-card"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <div className="feature-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </motion.div>
            ))
          }

        </div>

      </div>

    </section>
  );
}

export default Features;