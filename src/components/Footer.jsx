import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-white text-black text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%] mx-auto justify-between ">
        <div>
          <h1 className="text-2xl font-bold my-4">Company</h1>
          <p className="hover:text-red-700 hover:font-bold">
            <Link to="#">Innovations Business Services</Link>
          </p>
          <p className="hover:text-red-700 hover:font-bold">
            <Link to="#">Financial services</Link>
          </p>
          <p className="hover:text-red-700 hover:font-bold">
            <Link to="#">Lejhro Recruiter</Link>
          </p>
          <p className="hover:text-red-700 hover:font-bold">
            <Link to="/about">About</Link>
          </p>
          <p className="hover:text-red-700 hover:font-bold">
            <Link to="#">Blogs</Link>
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold my-4">Programs</h1>
          <p className="hover:text-red-700 hover:font-bold">
            <Link to="#">Lejhro Bootcamp</Link>
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold my-4">Support</h1>
          <p className="hover:text-red-700 hover:font-bold">
            <Link to="#">Contact</Link>
          </p>
          <p className="hover:text-red-700 hover:font-bold">
            <Link to="#">Terms of Use</Link>
          </p>
          <p className="hover:text-red-700 hover:font-bold">
            <Link to="#">Privacy Statement</Link>
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold my-4">Conntect with us</h1>
          <div className="flex justify-center">
            <Link to="#">
              <FaFacebook className="mx-2" />
            </Link>
            <Link to="#">
              <FaSquareTwitter className="mx-2" />
            </Link>
            <Link to="#"> <FaLinkedin className="mx-2" /></Link>
            <Link to="#" className="hover:underline hover:decoration-red-700">
              <FaYoutube className="mx-2" />
            </Link>
          </div>
        </div>
      </div>
      <h1 className="text-center my-10">© 2024 LEJHRO. All Rights Reserved.</h1>
    </div>
  );
}

export default Footer;
