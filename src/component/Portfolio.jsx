import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Slider from "react-slick";

function Portfolio() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div id="Projects">
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
                  and I have completed lot's of projects{" "}
                  <a href="#Contact" className="text-red-400">
                    see here.
                  </a>
                </p>
                <a href="#Contact" className="text-red-400 flex gap-3 mt-5">
                  Explore More <FaLongArrowAltRight />
                </a>
              </div>
            </div>
            {/* <div className="image-section flex mt-10">
              <span className="text-red-400 text-5xl max-[600px]:text-4xl">
                07
              </span>
              <h1 className="text-white text-xl ml-5 max-[600px]:ml-0 ">
                Years Of
                <br /> Experience
              </h1>
              <span className="text-red-400 text-5xl ml-5 max-[600px]:ml-0 success-counter max-[600px]:text-4xl">
                07
              </span>
              <h1 className="text-white text-xl ml-5 max-[600px]:ml-0">
                Years Of <br /> Experience
              </h1>
            </div> */}
          </div>
          <Slider {...settings} className="mt-10">
            <div>
              <img
                className="rounded-lg"
                src={require("../assets/portfolio1.png")}
                alt="portfolio1"
              />
            </div>
            <div>
              <img
                className="rounded-lg"
                src={require("../assets/portfolio2.png")}
                alt="portfolio2"
              />
            </div>
            <div>
              <img
                className="rounded-lg"
                src={require("../assets/portfolio1.png")}
                alt="portfolio1"
              />
            </div>
            <div>
              <img
                className="rounded-lg"
                src={require("../assets/portfolio2.png")}
                alt="portfolio2"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
