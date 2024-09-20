import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaLongArrowAltRight,
  FaTwitter,
} from "react-icons/fa";
function About() {
  return (
    <div className="about">
      <span className="title">
        <span className="bg-white  px-4 py-2"> About</span>
      </span>
      <div className="overflow-hidden  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  <span className="text-white text-6xl"> Hiii ,</span>
                  <br />
                  <span className="text-white text-6xl"> I’m </span>
                  <span className="text-red-400 text-6xl">Sneha</span>
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-stone-200 sm:text-4xl">
                  A better workflow
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-400">
                  Hey are looking for designer to build your{" "}
                  <span className="text-red-400">
                    {" "}
                    Brand and gorw your business ?{" "}
                  </span>
                  let's shake hands with me.
                </p>
                <button className="mt-6 flex items-center text-xl gap-2 text-white bg-red-500 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 rounded-md px-5 py-2.5 text-sm font-semibold shadow-sm">
                  Hire me <FaLongArrowAltRight />
                </button>
                <div className="social-icon mt-6 text-xl text-gray-400">
                  <ul className="flex gap-4">
                    <li>
                      <FaFacebookF />
                    </li>
                    <li>
                      <FaTwitter />
                    </li>
                    <li>
                      <FaLinkedinIn />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="image-section relative">
              <img
                alt="Product screenshot"
                src={require("../assets/about-dark.png")}
                width={2432}
                height={1442}
              />
              <img
                src={require("../assets/shape-one-dark.png")}
                alt="image"
                className="absolute left-36 top-0"
              />
              <img
                src={require("../assets/shape-two-dark.png")}
                alt="image"
                className="absolute right-36 top-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
