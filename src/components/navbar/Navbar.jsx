import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <>
      <div className="bg-purple-300">
        <nav className="flex items-center justify-between w-[80%] mx-auto   p-5">
          <div>
            <img src="/src/assets/react.svg" alt="" />
          </div>
          <div className=" flex items-center">
            <div onClick={() => setOpen(!open)} className="md:hidden">
              {open === true ? (
                <AiOutlineClose className="text-xl z-10"></AiOutlineClose>
              ) : (
                <HiMenu className="text-xl"></HiMenu>
              )}
            </div>
            <div
              className={`md:flex justify-center items-center md:gap-4 bg-purple-300 list-none p-4 ${
                open
                  ? "w-full text-center transition-all right-0 top-0 -z-10 pt-28 md:p-4 md:z-0 absolute md:static "
                  : "hidden"
              }`}
            >
              {routes.map((route, idx) => (
                <li key={idx} className="">
                  <a href={route.path}>{route.name}</a>
                </li>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
