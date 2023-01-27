import React, { useState } from "react";
import "./Header.css";
import { GrFacebookOption } from "react-icons/gr";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaTimes, FaBars } from "react-icons/fa";

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
          <div className="links">
            {nav.map((link, i) => (
              <span
                key={i}
                className={selectNav === link.path ? "active" : ""}
                onClick={() => setSelectNav(link.path)}
              >
                {link.title}
              </span>
            ))}
          </div>
          <div className="icons">
            {icons.map((icon, i) => (
              <span key={i}>
                <a href={icon.path}>{<icon.icon />}</a>
              </span>
            ))}
          </div>
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
