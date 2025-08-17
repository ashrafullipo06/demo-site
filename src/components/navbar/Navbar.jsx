import { useState } from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-6 flex justify-center bg-white">
      <div className="w-full bg-[#F6F5F2] text-black h-[70px] rounded-2xl flex justify-between items-center gap-4 px-6 relative">
        {/* Logo */}
        <div>
          <span className="text-[#a8ff53] text-2xl font-extrabold">
            &lt;/&gt;
          </span>{" "}
          <span className="bg-gradient-to-r text-black font-bold bg-clip-text text-2xl">
            Lipo.Dev
          </span>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8">
          {["Home", "Resume", "Portfolio", "Services", "Contact", "Blog"].map(
            (item, idx) => (
              <li key={idx}>
                <NavLink
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive ? "text-[#a8ff53]" : "text-gray-700"
                  }
                >
                  {item}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* Social icons always visible */}
        <ul className=" hidden md:flex md:gap-3 md:text-[25px]">
          <li>
            <MdOutlineFacebook />
          </li>
          <li>
            <FaSquareXTwitter />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaGithub />
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GiHamburgerMenu />
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="absolute top-[70px] right-0 bg-[#F6F5F2] w-48 shadow-lg rounded-lg p-4 flex flex-col gap-3 z-50"
            onMouseLeave={() => setIsOpen(false)}
          >
            {["Home", "Resume", "Portfolio", "Services", "Contact", "Blog"].map(
              (item, idx) => (
                <NavLink
                  key={idx}
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive ? "text-[#a8ff53]" : "text-gray-700"
                  }
                >
                  {item}
                </NavLink>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
