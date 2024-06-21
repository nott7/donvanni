import Link from "next/link";

import { IoMdPhonePortrait } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";

const Footer = () => {
  return (
    <div className="main-footer">
      <footer className="bg-slate-50">
        <div className="container mx-auto flex flex-col lg:flex-row-reverse justify-between items-center gap-4 p-4">
          <div>
            <Link href="/">
              <img
                src="/logo.png"
                alt="Don Vanni Logo"
                className="w-36 lg:w-44 hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <h2 className="text-2xl font-semibold text-[#280400] ">
                Don Vannì
              </h2>
              <p>Via Padre Annibale, Maria di Francia 3, 92010 Grotte (AG)</p>
            </div>
            <div>
              <span className="flex items-center gap-2">
                <IoMdPhonePortrait />
                <a href="tel:+393286777038" className="hover:underline">
                  +39 3286777038
                </a>
              </span>
              <span className="flex items-center gap-2">
                <IoMdPhonePortrait />
                <a href="tel:+393779703353" className="hover:underline">
                  +39 3779703353
                </a>
              </span>
              <span className="flex items-center gap-2">
                <IoMdMail />
                <a
                  href="mailto:pietro.castronovo@gmail.com"
                  className="hover:underline"
                >
                  pietro.castronovo@gmail.com
                </a>
              </span>
              <span className="flex items-center gap-2">
                <IoLogoFacebook />
                <a
                  href="https://www.facebook.com/profile.php?id=100059651091477"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Don Vannì
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
      <footer className="p-2 bg-[#1B0300] text-gray-400 flex flex-col lg:flex-row justify-center items-center text-xs gap-2">
        <p>Copyright © 2024</p>
        <p className="hidden lg:block">|</p>
        <p>DON VANNÌ DI CASTRONOVO PIERO</p>
        <p className="hidden lg:block">|</p>

        <p>ALL RIGHTS RESERVED</p>
        <p className="hidden lg:block">|</p>

        <p>PIVA 02649310840</p>
        <p className="hidden lg:block">|</p>

        <span>
          <Link href="/privacy-policy" className="hover:underline">
            <strong>Privacy Policy</strong>
          </Link>
          {"  "}-{"  "}
          <Link href="/cookie-policy" className="hover:underline">
            <strong>Cookie Policy</strong>
          </Link>
        </span>
      </footer>
    </div>
  );
};

export default Footer;
