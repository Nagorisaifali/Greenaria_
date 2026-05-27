
import { motion } from "framer-motion";
import {
  FaSeedling,
  FaRecycle,
  FaTruck,
  FaLeaf
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      {/* Background Blur */}
      <div className="hero-blur blur1"></div>
      <div className="hero-blur blur2"></div>

      {/* Green Leaves */}
      {/* <FaLeaf className="leaf leaf1" />
      <FaLeaf className="leaf leaf2" />
      <FaLeaf className="leaf leaf3" /> */}

      {/* Grass Decoration */}
      <div className="grass grass1"></div>
      <div className="grass grass2"></div>

      <div className="container hero-content">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* Badge */}
          <motion.div
            className="hero-tag"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <FaSeedling />
            Smart Green Initiative
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Smart
            <span> Recycling </span>
            For A Cleaner Future
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Schedule doorstep waste pickup, track recycling impact,
            and help create a greener city with our eco-friendly platform.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="outline-btn"
            >
              Learn More
            </motion.button>

          </motion.div>

          {/* Stats */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >

            <div>
              <FaRecycle className="stat-icon" />
              <h3>120T+</h3>
              <p>Waste Recycled</p>
            </div>

            <div>
              <FaTruck className="stat-icon" />
              <h3>35+</h3>
              <p>Pickup Zones</p>
            </div>

            <div>
              <FaSeedling className="stat-icon" />
              <h3>5000+</h3>
              <p>Green Members</p>
            </div>

          </motion.div>

        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          {/* Floating Cards */}
          <motion.div
            className="glass-card card1"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            ♻ 100% Eco Friendly
          </motion.div>

          <motion.div
            className="glass-card card2"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            🚛 Free Pickup Service
          </motion.div>

          {/* Main Image */}
          {/* <motion.img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            alt="eco"
            className="hero-image"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          /> */}


          <div className="giant-plant">

  {/* Main Stem */}
  <div className="plant-stem"></div>

  {/* Big Leaves */}
  <div className="plant-leaf leaf-1"></div>
  <div className="plant-leaf leaf-2"></div>
  <div className="plant-leaf leaf-3"></div>
  <div className="plant-leaf leaf-4"></div>

  {/* Top Leaf */}
  <div className="top-main-leaf"></div>

  {/* Glow */}
  <div className="plant-glow"></div>

</div>

            


        </motion.div>

      </div>

    </section>
  );
}

export default Hero;