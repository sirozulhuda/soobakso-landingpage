import { useState, useEffect } from "react";
import Logo from "../assets/img/logo.png";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const smoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
          setIsMenuOpen(false); // Close menu on click
        });
      });
    };

    smoothScroll();

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", smoothScroll);
      });
    };
  }, []);
  const navItems = [
    { link: "Home", path: "#home" },
    { link: "Menu", path: "#menu" },
    { link: "Tentang Kami", path: "#tentang" },
    { link: "Kontak", path: "#kontak" },
  ];

  return (
    <>
      <nav className="max-w-screen-2xl fixed top-0 right-0 left-0 bg-white shadow-lg scroll-smooth">
        <div className="mx-2 my-3 flex items-center justify-between md:mx-16">
          <a href="#" className="flex items-center space-x-2 font-bold text-lg">
            <img src={Logo} alt="logo" width={50} />
            SoBaksoo
          </a>
          {/* Mobile Menu */}
          <div className="md:hidden px-5">
            <button onClick={toggleMenu} className="text-black ">
              {isMenuOpen ? (
                <FaTimes className="w-8 h-8" />
              ) : (
                <FaBars className="w-8 h-8" />
              )}
            </button>
          </div>

          {/* NavItems Desktop (Hidden on Mobile) */}
          <div className="hidden md:flex">
            <ul className="flex space-x-4">
              {navItems.map(({ link, path }) => (
                <li key={link}>
                  <a
                    href={path}
                    className="font-medium text-black hover:bg-primary hover:text-white px-3 py-2 rounded-xl"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {/* NavItems Mobile */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden fixed top-0 right-0 left-0 bg-primary pt-24 pb-5 text-white text-lg font-medium space-y-4 px-4 z-10`}
      >
        {navItems.map(({ link, path }) => (
          <a key={link} href={path} className="block hover:font-semibold">
            {link}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
