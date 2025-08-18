import { useState } from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const menuItems = [
    "Home",
    "Resume",
    "Portfolio",
    "Services",
    "Contact",
    "Blog",
  ];

  return (
    <section className="py-6 flex justify-center bg-white">
      <div className="w-full bg-[#DDDDDD] text-black h-[70px] rounded-2xl flex justify-between items-center gap-4 px-6 relative">
        {/* Logo */}
        <div>
          <span className="text-[#a8ff53] text-2xl font-extrabold">
            &lt;/&gt;
          </span>{" "}
          <span className="bg-gradient-to-r text-black font-bold bg-clip-text text-2xl">
            LIPO
          </span>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className="cursor-pointer"
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Social icons */}
        <ul className="hidden md:flex md:gap-3 md:text-[25px]">
          <li>
            <a
              href="https://www.facebook.com/Lipo.ashrafulhaque"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdOutlineFacebook />
            </a>
          </li>
          <li>
             <FaTwitter />
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
          <div className="absolute top-[70px] right-0 bg-[#F6F5F2] w-48 shadow-lg rounded-lg p-4 flex flex-col gap-3 z-50">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="cursor-pointer"
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
