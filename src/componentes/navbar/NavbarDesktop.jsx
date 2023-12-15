import { Links } from "../Data";
import { NavLink } from "react-router-dom";
import menu from "../../assets/icons/icon-hamburger.svg";
import logo from "../../assets/icons/logo.svg";
export const NavbarDesktop = ({ handleMenu }) => {
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
          {Links.map((link) => (
            <li
              className="font-condensed 
                         flex
                       text-White
                         tracking-[2.7px]
                         ml-7"
              key={link.id}
            >
              <span
                className="hidden 
                           font-bold 
                           mr-5 
                           lg:block "
              >
                {link.page}
              </span>
              <NavLink to={`/${link.name.toLowerCase()}`}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <img src={menu} className="md:hidden" onClick={handleMenu} alt="menu" />
    </div>
  );
};
