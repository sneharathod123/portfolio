import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Slider from "react-slick";

function Works() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="Works">
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <span className="title block mb-4">
                  <span className="bg-white px-7 py-1 ">Portfolio</span>
                </span>
                <h1 className="text-4xl text-white">
                  Some of my Creative{" "}
                  <span className="text-red-400 "> Works.</span>
                </h1>
                <p className="text-white text-lg mt-10">
                  As a designer I have been working few years in this sector,
                  and i have complted lot's of project{" "}
                  <a href="#" className="text-red-400">
                    {" "}
                    see here.
                  </a>
                </p>
                <a href="#" className="text-red-400 flex gap-3 mt-5">
                  Explore More <FaLongArrowAltRight />
                </a>
              </div>
            </div>
            <div className="image-section  flex mt-10 ">
              <span className="text-red-400 text-5xl"> 07 </span>
              <h1 className="text-white text-xl ml-5">
                Years Of
                <br /> Experince
              </h1>
              <span className="text-red-400 text-5xl ml-5 success-counter">
                07
              </span>
              <h1 className="text-white text-xl ml-5">
                Years Of <br />
                Experince
              </h1>
            </div>
          </div>
          <Slider {...settings} className="mt-10">
            <div>
              <img
                className="rounded-lg"
                src={require("../assets/portfolio1.png")}
                alt="img"
              />
            </div>
            <div>
              <img
                className="rounded-lg"
                src={require("../assets/portfolio2.png")}
                alt="img"
              />
            </div>
            <div>
              <img
                className="rounded-lg"
                src={require("../assets/portfolio1.png")}
                alt="img"
              />
            </div>
            <div>
              <img
                className="rounded-lg"
                src={require("../assets/portfolio2.png")}
                alt="img"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Works;
