import React, { useState } from "react";
import "./Project.css";
import { BsZoomIn } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import project1 from "../../images/projects/project1.png";
import project2 from "../../images/projects/project2.jpg";
import project3 from "../../images/projects/project3.png";
import project4 from "../../images/projects/project4.png";
import { motion } from "framer-motion";
import SingleProject from "./SingleProject";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  const projects = [
    {
      image: project1,
      icon: BsZoomIn,
      cat: "web design",
    },
    {
      image: project2,
      icon: BsZoomIn,
      cat: "web design",
    },
    {
      image: project3,
      icon: BsZoomIn,
      cat: "logo design",
    },
    {
      image: project4,
      icon: BsZoomIn,
      cat: "branding",
    },
  ];
  const [projectDom, setProjectDom] = useState(projects);
  const [showImage, setShowImage] = useState("");
  const [filterBtn, setFIlterBtn] = useState("All");

  const getCat = ["All", ...new Set(projects.map((project) => project.cat))];

  const filterData = (cat) => {
    if (cat === "All") {
      setProjectDom(projects);
      return;
    } else {
      const newProject = projects.filter((project) => project.cat === cat);
      setProjectDom(newProject);
    }
    setFIlterBtn(cat);
  };

  return (
    <>
      <div className="projects">
        {/* circle span */}
        <span className="circle"></span>

        <Fade delay={1e2}>
          <h1 className="project_title">selected work</h1>
        </Fade>
        <div className="project_btn">
          {getCat.map((cat) => (
            <button
              className={filterBtn === cat ? "active" : ""}
              key={cat}
              onClick={() => filterData(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* project sample */}
        <div className="projects_sample">
          {projectDom.map((project, i) => (
            <SingleProject
              key={i}
              project={project}
              setShowImage={setShowImage}
            />
          ))}
        </div>

        {/* show single project image  */}
      </div>
      {showImage && (
        <motion.div
          className="image_show"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span onClick={() => setShowImage(false)}>
            <FaTimes />
          </span>
          <img src={showImage} alt="project" />
        </motion.div>
      )}
    </>
  );
};

export default Projects;
