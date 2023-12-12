import { useState } from "react";
import menu from "../../assets/icons/icon-hamburger.svg";
import logo from "../../assets/icons/logo.svg";
import { NavbarMobile } from "./NavbarMobile";
import { NavLink } from "react-router-dom";
const menuList = [
  { id: 0, text: "HOME" },
  { id: 1, text: "ABOUT" },
  { id: 2, text: "PROJECTS" },
  { id: 3, text: "CONTACT" }
]
export const Navbar = () => {
  const [modal, setModal] = useState(false)
  const handleMenu = () => {
    setModal(!modal)
  }
  return (
    <div
      className="flex
                   justify-between
                   items-center
                   w-full
                   pt-6
                   px-6
                   md:pl-6
                   md:px-0
                   absolute 
                   top-0 
                   right-0"
    >
      <img src={logo} alt="logo" />
      {/* <span 
                className="border-White
                             border-[1px]
                             hidden
                             lg:block
                             absolute
                             top-18
                             left-60
                             z-10
                             w-[30%]">

      </span> */}
      <div className="hidden md:block backdrop-blur-lg">
        <ul
          className="flex 
                     gap-5
                     md:px-10
                     lg:px-36
                     py-9
                     ">
          {menuList.map(link =>
            <li
              className="font-condensed flex
                     text-White
                       tracking-[2.7px]
                       ml-7"
              key={link.id}
            >
              <span
                className="hidden lg:block font-bold 
                           mr-5"
              >
                0{link.id}
              </span>
              <a>
                <NavLink 
                  to={`/${link.text.toLowerCase()}`}
                >
                  {link.text}
                </NavLink>
              </a>
            </li>)}
        </ul>
      </div>

      <img
        src={menu}
        className="md:hidden"
        onClick={handleMenu}
        alt="menu" 
      />
      {modal ? <NavbarMobile setModal={setModal}></NavbarMobile> : null}
    </div>
  );
};
