import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="mt-5 mb-10 p-5">
        <div className="border border-secondary w-full mb-20"></div>
        <div className="flex justify-center text-white gap-10 mb-5 max-sm:flex-col max-sm:items-center max-sm:mb-10">
          <a>About</a>
          <a>Contact</a>
          <a>Terms of Services</a>
          <a>Privacy Policy</a>
        </div>
        <div className="flex justify-center gap-5">
          <Link href={"https://x.com/bondxprotocol"}>
            <Twitter size={25} />
          </Link>
          <Link href={"/"}>
            <Instagram />
          </Link>
          <Link href={"/"}>
            <Facebook size={25} />
          </Link>
        </div>
        <p className="text-white text-center mt-5">
          &copy; All Rights Reserved{" "}
          <span className="font-main text-primary">
            {" "}
            Bond<span className="text-white font-bold text-lg">X </span>
          </span>
          {currentYear}
        </p>
      </div>
    </>
  );
};

export default Footer;
