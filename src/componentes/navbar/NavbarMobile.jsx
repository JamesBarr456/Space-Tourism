import close from "../../assets/icons/icon-close.svg";
const menuList = [
  { id: 0, text: "HOME" },
  { id: 1, text: "DESTINATION" },
  { id: 2, text: "CREW" },
  { id: 3, text: "TECHNOLOGY" },
];
export const NavbarMobile = ({ setModal }) => {
  const handleClose = () => {
    setModal(false);
  };
  return (
    <div
      className="absolute
                        top-0
                        right-0
                        w-64
                        min-h-screen
                        backdrop-blur-md
                        "
    >
      .
      <div
        className="flex
                            justify-end
                            w-full
                            pr-6
                            pt-4
                            mb-14"
      >
        <img src={close} alt="close" onClick={handleClose} />
      </div>
      <ul
        className="flex
                       flex-col
                       items-start
                       gap-5
                            "
      >
        {menuList.map((link) => (
          <li
            className="font-condensed
                             text-White
                               tracking-[2.7px]
                               ml-7"
          >
            <span
              className="font-bold 
                                               mr-5"
            >
              0{link.id}
            </span>
            {link.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
