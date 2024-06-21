"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const bodyDiv = document.querySelector(".wrapper");
    if (isOpen) {
      bodyDiv.classList.add("nav-open");
    } else {
      bodyDiv.classList.remove("nav-open");
    }
  }, [isOpen]);

  return (
    <header
      className="py-4 px-8 shadow-md border-gray-200 bg-slate-50
      h-[80px] lg:h-auto relative z-
    "
    >
      <div className="container mx-auto flex justify-between">
        <div>
          <Link href="/">
            <img
              src="/logo.png"
              alt="Don Vanni Logo"
              className="w-28 lg:w-44
              hover:scale-110 transition duration-300 ease-in-out cursor-pointer
            "
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center">
          <nav className="header-navbar">
            <ul className="flex space-x-4 items-center text-gray-400">
              <li>
                <Link
                  href="/"
                  className={`${
                    window.location.pathname === "/" ? "selected" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/chi-siamo"
                  className={`${
                    window.location.pathname === "/chi-siamo" ? "selected" : ""
                  }`}
                >
                  Chi siamo
                </Link>
              </li>
              <li>
                <Link
                  href="/la-nostra-storia"
                  className={`${
                    window.location.pathname === "/la-nostra-storia"
                      ? "selected"
                      : ""
                  }`}
                >
                  La nostra storia
                </Link>
              </li>
              <li>
                <Link
                  href="/i-nostri-vini"
                  className={`${
                    window.location.pathname === "/i-nostri-vini"
                      ? "selected"
                      : ""
                  }`}
                >
                  I nostri vini
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className={`${
                    window.location.pathname === "/gallery" ? "selected" : ""
                  }`}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contatti"
                  className={`${
                    window.location.pathname === "/contatti" ? "selected" : ""
                  }`}
                >
                  Contatti
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex lg:hidden justify-center items-center">
          <button
            className={`hamburger ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </button>
        </div>
        <div className={`mobile-menu ${isOpen && "open"}`}>
          <nav>
            <ul>
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/chi-siamo" onClick={() => setIsOpen(false)}>Chi siamo</Link>
              </li>
              <li>
                <Link href="/la-nostra-storia" onClick={() => setIsOpen(false)}>La nostra storia</Link>
              </li>
              <li>
                <Link href="/i-nostri-vini" onClick={() => setIsOpen(false)}>I nostri vini</Link>
              </li>
              <li>
                <Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
              </li>
              <li>
                <Link href="/contatti" onClick={() => setIsOpen(false)}>Contatti</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
