import React, { useState } from "react";
import "./Header.css";
import { GrFacebookOption } from "react-icons/gr";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaTimes, FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  const [selectNav, setSelectNav] = useState("/");
  const [openBar, setOpenBar] = useState(false);

  const nav = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/portfolio",
      title: "Portfolio",
    },
    {
      path: "/services",
      title: "Services",
    },
    {
      path: "/contact",
      title: "Contact Us",
    },
  ];

  const icons = [
    {
      icon: GrFacebookOption,
      path: "#",
    },
    {
      icon: FaPinterestP,
      path: "#",
    },
    {
      icon: AiOutlineTwitter,
      path: "#",
    },
    {
      icon: BsFillTelephoneFill,
      path: "#",
    },
  ];

  return (
    <div>
      <header className="header">
        <nav className={openBar ? "active" : ""}>
          <span className="close" onClick={() => setOpenBar(false)}>
            <FaTimes />
          </span>
          <motion.div
            className="links"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {nav.map((link, i) => (
              <span
                key={i}
                className={selectNav === link.path ? "active" : ""}
                onClick={() => setSelectNav(link.path)}
              >
                {link.title}
              </span>
            ))}
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="icons"
          >
            {icons.map((icon, i) => (
              <span key={i}>
                <a href={icon.path}>{<icon.icon />}</a>
              </span>
            ))}
          </motion.div>
        </nav>
        <div className="bar">
          <span onClick={() => setOpenBar(true)}>
            <FaBars />
          </span>
        </div>
      </header>
    </div>
  );
};

export default Header;
