import React from "react";
import { motion } from "framer-motion";

const SingleProject = ({ project, setShowImage }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project" onClick={() => setShowImage(project.image)}>
        <img src={project.image} alt="project" />
        <span>
          <project.icon />
        </span>
      </div>
    </motion.div>
  );
};

export default SingleProject;
