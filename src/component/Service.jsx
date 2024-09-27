import React from "react";

function Service() {
  return (
    <div className="Service">
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl  gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="image-section relative lg:mb-16" data-aos="fade-up">
              <span className="title block mb-4">
                <span className="bg-white px-7 py-1 ">Service</span>
              </span>
              <img
                alt="Product screenshot"
                src={require("../assets/services-dark.png")}
                width={2432}
                height={1442}
              />
              <img
                src={require("../assets/shape-one-dark.png")}
                alt="image"
                className="absolute left-2 top-20 w-12"
              />
              <img
                src={require("../assets/shape-two-dark (1).png")}
                alt="image"
                className="absolute right-36 top-12 max-[600px]:right-0"
              />
            </div>
            <div className="text-section lg:pl-16 lg:pt-20" data-aos="fade-up">
              {" "}
              <div className="lg:max-w-lg">
                <h2 className=" font-semibold text-5xl max-[600px]:text-3xl text-white py-3">
                  The <span className="text-red-400">Services</span> I Offer
                </h2>
                <p className="mt-2 text-lg  tracking-tight text-stone-200  py-3">
                  I am committed to delivering customized web solutions that
                  meet your goals. My focus is on creating high-quality
                  applications that enhance your brand's digital presence.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-400">
                  Looking for a developer to elevate your business?
                  <span className="text-red-400">
                    {" "}
                    Let’s collaborate to turn your vision into reality!
                  </span>
                </p>
                <div className="services-provide mt-8 text-white text-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={require("../assets/service-icon1.png")}
                        alt="Web Development Icon"
                        className=" bg-blue-400 rounded-full p-3"
                      />
                      <h3 className="max-[600px]:text-sm">
                        Front-End Development
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src={require("../assets/service-icon2.png")}
                        alt="Web Development Icon"
                        className=" bg-blue-400 rounded-full p-3"
                      />
                      <h3 className="max-[600px]:text-sm">
                        Back-End Development
                      </h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={require("../assets/service-icon3.png")}
                        alt="Web Development Icon"
                        className=" bg-blue-400 rounded-full p-4"
                      />
                      <h3 className="max-[600px]:text-sm">
                        API Development & Integration
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src={require("../assets/service-icon4.png")}
                        alt="Web Development Icon"
                        className=" bg-blue-400 rounded-full p-3"
                      />
                      <h3 className="max-[600px]:text-sm">Web Development</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
