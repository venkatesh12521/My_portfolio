
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from 'react-icons/fa'; // For GitHub
import { FaTwitter } from 'react-icons/fa'; // For Twitter


const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-yellow-400 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 
        data-aos="zoom-out"
         className=" font-bold text-5xl sm:text-3xl">Let's Talk</h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a 
          

            href="https://t.me/Virat768"
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <FaTelegramPlane className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Telegram</p>
          </a>
          <a 
         

            href="https://wa.me/qr/WMHLAV3UUY2DN1 "
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <IoLogoWhatsapp className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
          <a 
          

            href="https://www.instagram.com/venky12521/"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <RiInstagramFill className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Instagram</p>
          </a>
          <a
          href="https://github.com/venkatesh12521"
          className="box font-medium text-white flex items-center justify-center flex-col">
          <FaGithub className="text-black text-3xl hover:scale-125 cursor flex-col"/>
          <p>Github</p>
          </a>
          <a
          href="https://x.com/VeerisettiVenky?t=4TjWHR815klQyEQ6O20flg&s=08"
          className="box font-medium text-white flex items-center justify-center flex-col">
            <FaTwitter className="text-black text-3xl hover:scale-125 cursor flex-col"/>
            <p>Twitter</p>
          </a>
        </div>
        <div className="sm:text-[12px]">
          | Copyright &copy; <span>Venkatesh </span> All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
