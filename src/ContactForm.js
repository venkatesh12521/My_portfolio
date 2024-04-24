import React, {useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data (e.g., send an email, save to database, etc.)
    console.log("Form data:", formData);
    // Replace the console.log with your desired action
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    AOS.init({
      duration: 1000 // Adjust animation duration as needed
    });
  }, []);

  return (
    <div id="contact" className="container m-auto mt-16">
      {/* heading */}
      <div className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
      <div className=" md:flex items-center justify-center ">
        <div className=" md:flex-1 md:flex items-center justify-center ">
          <div className=" ">
            <div data-aos="zoom-in">
              <h1 className="text-xl font-bold text-center sm:text-3xl">You Need</h1>
              <h3 className="text-xl sm:text-lg  text-center">
                Beautiful design for your website leave a request
              </h3>
            </div>
          </div>
          <div className="md:flex p-5 flex items-center justify-center ">
            <button data-aos="zoom-in" className="text-yellow-500 font-extrabold  text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] ">
              <BsArrowRight className=" md:rotate-0 rotate-90 h-6" />
            </button>
          </div>
        </div>
        <div className="right flex-1">
          
          <form
        data-aos="zoom-in"
        className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
          type="email"
          placeholder="e.g. example@email.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
          type="text"
          placeholder="e.g. John Doe"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <textarea
          className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
          rows="4"
          cols="50"
          placeholder="Write your message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button
          className="bg-yellow-500 w-full text-white font-semibold p-2 rounded-lg flex items-center justify-center space-x-1"
          type="submit"
        >
          <span>Send</span>
          <RiSendPlaneFill />
        </button>
      </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
