import menu from "../assets/icons/icon-hamburger.svg";
import logo from "../assets/icons/logo.svg";
export const Navbar = () => {
  return (
    <div
      className="flex
                   justify-between
                   items-center
                   w-full
                   p-6
                   absolute 
                   top-0 
                   left-0"
    >
      <img src={logo} alt="logo" />
      <img src={menu} alt="menu" />
    </div>
  );
};
