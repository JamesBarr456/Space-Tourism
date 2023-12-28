import { useEffect } from "react";
import { Links } from "../Data";
import { NavLink } from "react-router-dom";
import { useNavbarContext } from "./NavbarContext";
import close from "../../assets/icons/icon-close.svg";

export const NavbarMobile = ({ setModal }) => {
  const { updateClickedIndex } = useNavbarContext()

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
                 z-50
                 top-0
                 right-0
                 w-64
                 min-h-screen
                 backdrop-blur-md
                 bg-[#ffffff0d]"
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
        {Links.map((link, index) => (
          <li
            className="font-condensed
                     text-White
                       tracking-[2.7px]
                       ml-7"
            key={link.id}
            onClick={()=> 
               {updateClickedIndex(index)
               handleClose()}
                
              }
          >
            <NavLink 
              to={`/${link.name.toLowerCase()}`} 
            >
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
