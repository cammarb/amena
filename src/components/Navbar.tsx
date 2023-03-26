import React, { useRef, useState } from "react";
import { HiOutlineShoppingCart, HiUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import NavLinks from "./NavLinks";

type Props = {};

interface ILink {
  name: string;
  url: string;
}

const links: ILink[] = [
  {
    name: "Menu",
    url: "menu",
  },
  {
    name: "Nosotros",
    url: "about",
  },
  {
    name: "Contacto",
    url: "contact",
  },
];

const Navbar = (props: Props) => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="py-4 px-4 border-b-2 grid grid-cols-3 place-items-center items-center sm:justify-items-stretch">
        <button
          className="toggle justify-self-start sm:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
        </button>
        <div>
          <Link to={"/"}>
            <img src="/public/logo.png" alt="Amena Logo" className="w-16" />
          </Link>
        </div>
        <div className="flex justify-items-end gap-4 justify-self-end sm:order-last">
          <Link to={"/cart"} onClick={() => setIsOpen(false)}>
            <HiOutlineShoppingCart />
          </Link>
          <Link to={"/account"} onClick={() => setIsOpen(false)}>
            <HiUser />
          </Link>
        </div>
        {/* Mobile */}
        <div
          className={
            "py-4 px-4 grid-flow-row gap-4 sm:hidden " +
            (isOpen ? "grid" : "hidden")
          }
        >
          {links.map((link) => {
            return (
              <NavLinks
                key={link.name}
                url={link.url}
                name={link.name}
                click={() => setIsOpen(false)}
              />
            );
          })}
        </div>
        {/* Desktop */}
        <div className="hidden py-4 px-4 grid-flow-col gap-4 sm:grid">
          {links.map((link) => {
            return <NavLinks key={link.name} url={link.url} name={link.name} />;
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
