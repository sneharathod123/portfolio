import React from "react";
import Slider from "react-slick";
function Testimonial() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="Testimonial">
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid items-end max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4 relative">
              {" "}
              <div className="lg:max-w-lg">
                <div className="relative">
                  <img
                    src={require("../assets/testimonial-dark.png")}
                    alt="img"
                  />
                  <img
                    src={require("../assets/shape-two.png")}
                    alt="img"
                    className="absolute right-0 top-0 w-32 sm:w-40 lg:w-52"
                    style={{
                      transform: "translate(30%, -30%)",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="text-section lg:pl-16 lg:pt-20">
              <span className="title block mb-6">
                <span className="bg-white px-7 py-1 ">Testimonial</span>
              </span>
              <h1 className="text-4xl font-semibold text-white">
                What my happy <span className="text-red-400"> client</span>{" "}
                saying their services.
              </h1>
              <Slider {...settings} className="mt-5">
                <div>
                  <p className="text-white text-lg mt-10">
                    Really they guy is amazing , he saved my times and properly
                    have completed my requirment with great effort. I appreciate
                    to him for web & app design, he is good at fit.
                  </p>
                  <div className="flex text-white mt-10 leading-8 ">
                    <img
                      className="rounded-lg"
                      src={require("../assets/testi-author.png")}
                      alt="img"
                    />
                    <p className="pl-10">
                      Ryhan <br /> CEO of Instragram
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-white text-lg mt-10">
                    Really they guy is amazing , he saved my times and properly
                    have completed my requirment with great effort. I appreciate
                    to him for web & app design, he is good at fit.
                  </p>
                  <div className="flex text-white mt-10 leading-8 ">
                    <img
                      className="rounded-lg"
                      src={require("../assets/testi-author.png")}
                      alt="img"
                    />
                    <p className="pl-10">
                      Ryhan <br /> CEO of Instragram
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-white text-lg mt-10">
                    Really they guy is amazing , he saved my times and properly
                    have completed my requirment with great effort. I appreciate
                    to him for web & app design, he is good at fit.
                  </p>
                  <div className="flex text-white mt-10 leading-8 ">
                    <img
                      className="rounded-lg"
                      src={require("../assets/testi-author.png")}
                      alt="img"
                    />
                    <p className="pl-10">
                      Ryhan <br /> CEO of Instragram
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-white text-lg mt-10">
                    Really they guy is amazing , he saved my times and properly
                    have completed my requirment with great effort. I appreciate
                    to him for web & app design, he is good at fit.
                  </p>
                  <div className="flex text-white mt-10 leading-8 ">
                    <img
                      className="rounded-lg"
                      src={require("../assets/testi-author.png")}
                      alt="img"
                    />
                    <p className="pl-10">
                      Ryhan <br /> CEO of Instragram
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
