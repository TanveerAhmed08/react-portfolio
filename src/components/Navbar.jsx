import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return <nav className="
   mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img src="" alt=""  />
    </div>
    <div className="m-8 flex items-center justify-center gap-5 text-2xl">
       
       <Link to={"https://www.linkedin.com/in/tanveer-ahmed-87a23224a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target="_blank">
        <FaLinkedin />
        </Link>
        <Link to={"https://github.com/TanveerAhmed08"} target="_blank">
        <FaGithub />
        </Link>
        <Link to={"https://www.facebook.com/share/g623Nv7DW9UTKp7o/?mibextid=qi2Omg"} target="_blank">
        <FaFacebook />
        </Link>
        <Link to={"https://www.instagram.com/tannu_here1999?igsh=MWw5YmZpMWFyOTh2ZA=="} target="_blank">
        <FaInstagram />
        </Link>
    </div>
  </nav>;
};

export default Navbar;
