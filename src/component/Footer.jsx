import React from "react";
// import behanceIcon from "../assets/social-behance.png";
// import instagramIcon from "../assets/social-instagram.png";
// import LinkedinIcon from "../assets/linkedinP.png";
import footerGirl from "../assets/footer-bottom-girl.png";
import footerShape from "../assets/footer-bottom-shape.png";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

function Footer() {
  // const socialLinks = [
  //   { href: "#", imgSrc: behanceIcon, alt: "Behance" },
  //   {
  //     href: "https://wordpressriverthemes.com/HTML/itsme/index-dark.html#About",
  //     imgSrc: LinkedinIcon,
  //     alt: "LinkedIn",
  //   },
  //   { href: "#", imgSrc: instagramIcon, alt: "Instagram" },
  // ];

  return (
    <div className="footer relative text-white">
      <div className="footer-contact relative text-center leading-10 z-10">
        <h1 className="text-4xl font-bold">Stay Connected</h1>
        <p className="text-gray-400 text-lg">Gujarat</p>
        <p className="text-xl">rathodsneha397@gmail.com</p>
        <p>(+778) 675-0765</p>
      </div>
      <ul className="flex justify-center gap-4 mt-7 z-10 relative text-3xl">
        <li>
          <a href="#">
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="#">
            <CiFacebook />
          </a>
        </li>
        {/* {socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} aria-label={link.alt}>
              <img
                className="bg-white p-1 rounded-full hover:shadow-lg w-12 h-12"
                src={link.imgSrc}
                alt={link.alt}
              />
            </a>
          </li>
        ))} */}
      </ul>
      <div className="footer-image-section">
        <img
          src={footerGirl}
          className="absolute bottom-0 right-2/3 w-44 max-[1000px]:w-1/4 z-0 "
          alt="Illustration of a girl"
          data-aos="fade-right"
        />
        <img
          src={footerShape}
          className="mx-auto mt-5"
          alt="Decorative shape at footer bottom"
        />
      </div>
    </div>
  );
}

export default Footer;
