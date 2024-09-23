import React from "react";
import { TbPointerOff } from "react-icons/tb";

function Contact() {
  return (
    <div className="contact">
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto items-center p-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 rounded-xl shadow-xl ring-1 ring-gray-400/10 ">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <span className="title block mb-4">
                  <span className="bg-white px-7 py-1 ">Contact</span>
                </span>
                <h2 className="text-3xl leading-7 text-white py-3 leading-relaxed mt-10">
                  Estimate your project? Let me know here.
                </h2>
                <input
                  type="text"
                  className="form w-full mt-10"
                  placeholder="Enter Your Name"
                />
                <input
                  type="text"
                  className="form w-full mt-10"
                  placeholder="Enter Your Email"
                />
                <div className="flex mt-10 ">
                  <input
                    type="text"
                    className="form w-full "
                    placeholder="Tell me about your project"
                  />
                  <TbPointerOff className="text-red-400 " />
                </div>
              </div>
            </div>
            <div className="image-section ">
              <img
                alt="Product screenshot"
                src={require("../assets/contact.png")}
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
