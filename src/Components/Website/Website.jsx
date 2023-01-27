import React from "react";
import "./Website.css";
import { motion } from "framer-motion";

const Website = () => {
  return (
    <div className="container">
      <div className="texts">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <h1>
            I am <br />
            designer
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <p className="tage">my demand is your satisfaction</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <p className="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            cupiditate facere esse quaerat eius nostrum. Quia deleniti vel quasi
            at mollitia fuga facere asperiores, quibusdam possimus delectus et
            sit totam!
          </p>
        </motion.div>
        <motion.div
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          <button className="btn">Read More</button>
        </motion.div>
      </div>
      <div className="empty"></div>
    </div>
  );
};

export default Website;
