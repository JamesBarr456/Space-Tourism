import { Links } from "../Data";
import { NavLink } from "react-router-dom";
import menu from "../../assets/icons/icon-hamburger.svg";
import logo from "../../assets/icons/logo.svg";
import { motion } from "framer-motion";
import { useState } from "react";
useState
export const NavbarDesktop = ({ handleMenu }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(0);

  const handleLinkClick = (index) => {
    setClickedIndex(index);
  };
  return (
    <div
      className="flex
                   justify-between
                   items-center
                   w-full
                   absolute 
                   pt-6
                   px-6
                   top-0 
                   right-0
                   md:pl-6
                   md:px-0"
    >
      <img src={logo} alt="logo" />
      <div
        className="hidden 
                   backdrop-blur-lg 
                   bg-[#ffffff0d]
                   md:block"
      >
        <ul
          className="flex 
                     gap-5
                     py-9
                     md:px-10
                     lg:px-36"
        >
          {Links.map((link, index) => (
            <motion.li

              className="font-condensed 
                         flex
                         relative
                       text-White
                         tracking-[2.7px]
                         ml-7"
              key={link.id}
              onHoverStart={() => setHoveredIndex(index)} // Actualiza el índice al hacer hover
              onHoverEnd={() => setHoveredIndex(null)} // Reinicia el índice al dejar de hacer hover
            >

              <NavLink
                to={`/${link.name.toLowerCase()}`}
                onClick={() => handleLinkClick(index)}
                className="flex"
              >
                <span
                  className="hidden 
                           font-bold 
                           mr-5 
                           lg:block "
                >
                  {link.page}
                </span>
                {link.name}
              </NavLink>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX:
                    hoveredIndex === index || clickedIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
                style={{
                  position: "absolute",
                  bottom: -36,
                  left: 0,
                  width: "100%",
                  height: 3,
                  background:
                   "white" 
                ,
                }}
              />
            </motion.li>
          ))}
        </ul>
      </div>

      <img src={menu} className="md:hidden" onClick={handleMenu} alt="menu" />
    </div>
  );
};
