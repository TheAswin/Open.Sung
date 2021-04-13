import React from "react";
import "./css/Home.css";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="home">
        <h1>Home</h1>
      </div>
    </motion.div>
  );
};

export default Home;
