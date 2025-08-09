import { MdOutlineFacebook } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <section className="py-6 flex justify-center bg-white">
      <div className="w-full bg-[#F6F5F2] text-black h-[70px] rounded-2xl flex justify-between items-center gap-4 px-6">
        {/* Logo */}
        <div>
          <span className="text-[#a8ff53] text-2xl font-extrabold">
            &lt;/&gt;
          </span>{" "}
          <span className="bg-gradient-to-r text-black font-bold bg-clip-text text-2xl">
            Lipo.Dev
          </span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#a8ff53]" : "text-gray-700"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive ? "text-[#a8ff53]" : "text-gray-700"
              }
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "text-[#a8ff53]" : "text-gray-700"
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-[#a8ff53]" : "text-gray-700"
              }
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-[#a8ff53]" : "text-gray-700"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-[#a8ff53]" : "text-gray-700"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>

        {/* Social icons */}
        <ul className="flex gap-3 text-[25px]">
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
      </div>
    </section>
  );
};

export default Navbar;
