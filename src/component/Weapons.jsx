import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

// const WeaponImage = ({ src, alt, classes }) => (
//   <img
//     className={`bg-white rounded-xl absolute ${classes}`}
//     src={require(`../assets/${src}.png`)}
//     alt={alt}
//   />
// );

function Weapons() {
  return (
    <div className="Weapons">
      <div className="overflow-hidden py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg leading-8">
                <span className="title block mb-4">
                  <span className="bg-white px-7 py-1">My Weapons</span>
                </span>
                <h1 className="text-4xl text-white">
                  My{" "}
                  <span className="text-red-400 font-bold">favorite tools</span>{" "}
                  which I use every day in my life.
                </h1>
                <p className="text-gray-400">
                  I love the software I use in my work because I'm very skilled
                  with them. These are the main tools in my design career, which
                  help ensure client satisfaction.
                </p>
                <a
                  href="#Contact"
                  className="flex text-lg hover:text-red-400 text-white gap-3 mt-10"
                >
                  Let's see My Work Process <FaLongArrowAltRight />
                </a>
              </div>
            </div>
            <div className="relative flex justify-center items-center h-[500px] w-full">
              <div className="absolute top-[12%] left-[60%] transform -translate-x-1/2 max-[600px]:left-[75%] max-[600px]:top-[23%]">
                <img
                  src={require("../assets/html.png")}
                  alt="HTML"
                  className="w-[100px] h-[100px] object-cover max-[600px]:w-[70px] max-[600px]:h-[70px]  "
                />
              </div>
              <div className="absolute top-[50%] right-[10%] transform -translate-y-1/2 max-[600px]:right-[0]">
                <img
                  src={require("../assets/react.png")}
                  alt="React"
                  className="w-[100px] h-[100px] object-cover max-[600px]:w-[70px] max-[600px]:h-[70px]"
                />
              </div>

              <div className="absolute bottom-[10%] right-[25%] max-[600px]:right-[14%] max-[600px]:bottom-[22%]">
                <img
                  src={require("../assets/nodejs.png")}
                  alt="Node.js"
                  className="w-[100px] h-[100px]  object-cover max-[600px]:w-[70px] max-[600px]:h-[70px]"
                />
              </div>

              <div className="absolute bottom-[10%] left-[25%] max-[600px]:bottom-[23%]">
                <img
                  src={require("../assets/tailwind.png")}
                  alt="Tailwind"
                  className="w-[100px] h-[80px]  object-cover max-[600px]:w-[70px] max-[600px]:h-[70px]"
                />
              </div>

              <div className="absolute top-[50%] left-[10%] transform -translate-y-1/2 max-[600px]:left-[5%]">
                <img
                  src={require("../assets/express-js.png")}
                  alt="Express.js"
                  className="w-[100px] h-[100px]  object-cover max-[600px]:w-[70px] max-[600px]:h-[70px]"
                />
              </div>
              <div className="absolute top-[50%] left-[40%] transform -translate-y-1/2">
                <img
                  src={require("../assets/github.png")}
                  alt="Express.js"
                  className="w-[100px] h-[100px]  object-cover max-[600px]:w-[70px] max-[600px]:h-[70px]"
                />
              </div>

              <div className="absolute top-[10%] left-[22%] max-[600px]:top-[22%] ">
                <img
                  src={require("../assets/redux.png")}
                  alt="Redux"
                  className="w-[100px] h-[100px]  object-cover max-[600px]:w-[70px] max-[600px]:h-[70px]"
                />
              </div>
            </div>

            {/* <div className="weapon-image-section relative">
              <WeaponImage
                src="figma"
                alt="Figma"
                classes="p-8 sm:p-10 left-24 sm:left-36 lg:left-48 top-24 sm:top-28"
              />
              <WeaponImage
                src="google"
                alt="Google"
                classes="p-6 sm:p-8 left-4 sm:left-8 inset-x-0 bottom-0"
              />
              <WeaponImage
                src="linkedin"
                alt="LinkedIn"
                classes="p-5 top-0 left-1/2 transform -translate-x-1/2 ml-2 sm:ml-4"
              />
              <WeaponImage
                src="xd"
                alt="Adobe XD"
                classes="p-4 sm:p-5 top-2 left-[80px] sm:left-[111px] transform -translate-x-1/2"
              />
              <WeaponImage
                src="sketch"
                alt="Sketch"
                classes="p-10 sm:p-14 top-2 right-0 transform translate-x-[10px] sm:translate-x-[20px] mr-4 sm:mr-10"
              />
              <WeaponImage
                src="slack"
                alt="Slack"
                classes="p-5 sm:p-6 top-44 sm:top-52 right-4 sm:right-6 transform translate-x-[10px] sm:translate-x-[20px] mr-4 sm:mr-10"
              />
              <WeaponImage
                src="skype"
                alt="Skype"
                classes="bottom-[-60px] sm:bottom-[-80px] right-1/2 transform -translate-x-1/2 ml-2 sm:ml-4"
              />
              <WeaponImage
                src="dribbble"
                alt="Dribbble"
                classes="p-3 sm:p-4 bottom-[-60px] sm:bottom-[-80px] right-1/4 transform -translate-x-1/2 ml-2 sm:ml-4"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weapons;
