import React, { useState } from "react";
import { HiOutlineShoppingCart, HiUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="py-4 px-4 border-b-2 flex justify-between">
        <button className="toggle" onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
        </button>
        <div className="flex">
          <Link to={"/"}>
            <img src="" alt="Amena Logo" />
          </Link>
        </div>
        <div className="flex justify-items-end gap-4 items-center">
          <Link to={"/cart"} onClick={() => setIsOpen(false)}>
            <HiOutlineShoppingCart />
          </Link>
          <Link to={"/account"} onClick={() => setIsOpen(false)}>
            <HiUser />
          </Link>
        </div>
      </nav>
      <div
        className="py-4 px-4 grid grid-flow-row gap-4"
        style={isOpen ? { display: "grid" } : { display: "none" }}
      >
        <Link to={"/contact"} onClick={() => setIsOpen(false)}>
          Contacto
        </Link>
        <Link to={"/terms"} onClick={() => setIsOpen(false)}>
          Terminos y Condiciones
        </Link>
      </div>
    </>
  );
};

export default Navbar;
