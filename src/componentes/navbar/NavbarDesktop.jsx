import { Links } from "../Data";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavbarContext } from "./NavbarContext";
import menu from "../../assets/icons/icon-hamburger.svg";
import logo from "../../assets/icons/logo.svg";

export const NavbarDesktop = ({ handleMenu }) => {
  
  const { clickedIndex, updateClickedIndex, hoveredIndex, updateHoveredIndex } = useNavbarContext()
  
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
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden
                     relative
                   bg-White
                     w-[30%]
                     h-[1px]
                     ml-16
                     -mr-[2.5rem]
                     z-50
                     top-[50%]
                     lg:block
                     "
      ></motion.span>
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
                     lg:px-32"
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
              onHoverStart={() => updateHoveredIndex(index)} // Actualiza el índice al hacer hover
              onHoverEnd={() => updateHoveredIndex(null)} // Reinicia el índice al dejar de hacer hover
            >
              <NavLink
                to={`/${link.name.toLowerCase()}`}
                onClick={() => updateClickedIndex(index)}
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
                  background: clickedIndex === index ? "white" : "gray",
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
