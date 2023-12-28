import { useState } from "react";
import { NavbarMobile } from "./NavbarMobile";
import { NavbarDesktop } from "./NavbarDesktop";

export const Navbar = () => {
  const [modal, setModal] = useState(false);
  const handleMenu = () => {
    setModal(!modal);
  };
  return (
    <>
      <NavbarDesktop handleMenu={handleMenu}></NavbarDesktop>
      {modal ? <NavbarMobile setModal={setModal}></NavbarMobile> : null}
    </>
  );
};
