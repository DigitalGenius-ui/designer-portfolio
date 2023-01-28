import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Team from "../Team/Team";
import Website from "../Website/Website";
import "./Home.css";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <div className="banner"></div>
      <div className="contents">
        <Header />

        <motion.div
          initial={{ opacity: 0, zIndex: 1 }}
          animate={{ opacity: 1, zIndex: -1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h1 className="title">Fashion</h1>
        </motion.div>

        <section className="website">
          <Website />
          <Team />
          <AnimatePresence>
            <Projects />
          </AnimatePresence>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
