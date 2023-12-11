import { useState } from "react";
import menu from "../../assets/icons/icon-hamburger.svg";
import logo from "../../assets/icons/logo.svg";
import { NavbarMobile } from "./NavbarMobile";
export const Navbar = () => {
  const [modal, setModal] = useState(false)
  const handleMenu = () =>{
    setModal(!modal)
   }
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
      <img 
        src={menu} 
        className="md:hidden"
        onClick={handleMenu} 
        alt="menu" />
      {modal ? <NavbarMobile setModal={setModal}></NavbarMobile> : null}
    </div>
  );
};
