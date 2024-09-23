import React from "react";

function Footer() {
  return (
    <div className="footer relative">
      <div className="footer-contact text-center text-white leading-10">
        <h1 className=" text-4xl font-bold">Stay Connected</h1>
        <p className="text-gray-400 text-lg">Bangladesh</p>
        <p className="text-xl">hello_niharik@gmail.com</p>
        <p>(+778) 675-0765</p>
      </div>
      <ul className="justify-center flex gap-2 text-center mt-10">
        <li>
          <a href="#">
            <img
              className="bg-white p-4 rounded-full"
              src={require("../assets/social-behance.png")}
              alt="img"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              className="bg-white p-4 rounded-full"
              src={require("../assets/social-dribbble.png")}
              alt="img"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              className="bg-white p-4 rounded-full"
              src={require("../assets/social-instagram.png")}
              alt="img"
            />
          </a>
        </li>
      </ul>
      <img
        src={require("../assets/footer-bottom-girl.png")}
        className="absolute bottom-0 left-1/4"
        alt=""
      />
      <img
        src={require("../assets/footer-bottom-shape.png")}
        alt="img"
        className="mx-auto"
      />
    </div>
  );
}

export default Footer;
