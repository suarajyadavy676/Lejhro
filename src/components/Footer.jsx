import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-white text-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%] mx-auto justify-between">
        <div>
          <h1 className="text-2xl font-bold my-4">Company</h1>
          <p>Innovations Business Services</p>
          <p>Financial services</p>
          <p>Lejhro Recruiter</p>
          <p>About</p>
          <p>Blogs</p>
        </div>
        <div>
          <h1 className="text-2xl font-bold my-4">Programs</h1>
          <p>Lejhro Bootcamp</p>
        </div>
        <div>
          <h1 className="text-2xl font-bold my-4">Support</h1>
          <p>Contact</p>
          <p>Terms of Use</p>
          <p>Privacy Statement</p>
        </div>
        <div>
          <h1 className="text-2xl font-bold my-4">Conntect with us</h1>
          <div className="flex"><FaFacebook className="mx-2"/> <FaLinkedin className="mx-2"/> <FaSquareTwitter className="mx-2"/> <FaYoutube className="mx-2"/> </div>
        </div>
      </div>
        <h1 className="text-center my-10">© 2024 LEJHRO. All Rights Reserved.</h1>
    </div>
  );
}

export default Footer;
