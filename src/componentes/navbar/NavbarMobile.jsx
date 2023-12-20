import { useEffect } from "react";
import close from "../../assets/icons/icon-close.svg";
import { Links } from "../Data";
import { NavLink } from "react-router-dom";
useEffect
export const NavbarMobile = ({ setModal }) => {
  const handleClose = () => {
    setModal(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 726) {
        handleClose();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="absolute
                 top-0
                 right-0
                 w-64
                 min-h-screen
                 backdrop-blur-md
                 bg-[#ffffff0d]
                Ñ"
    >
      <div
        className="flex
                   justify-end
                   w-full
                   pr-6
                   pt-8
                   mb-14"
      >
        <img src={close} alt="close" onClick={handleClose} />
      </div>
      <ul
        className="flex
                       flex-col
                       items-start
                       gap-5"
      >
        {Links.map((link) => (
          <li
            className="font-condensed
                     text-White
                       tracking-[2.7px]
                       ml-7"
            key={link.id}
          >
            <NavLink to={`/${link.name.toLowerCase()}`} onClick={handleClose}>
              <span
                className="font-bold 
                           mr-5"
              >
                {link.page}
              </span>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
