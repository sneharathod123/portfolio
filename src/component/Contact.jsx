import React from "react";
import { TbPointerOff } from "react-icons/tb";
import { toast } from "react-toastify";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b7be108e-dfff-49a5-bdeb-7c674c1e4c34");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      // Clear the form fields after successful submission
      event.target.reset();

      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("There was an issue submitting the form.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div id="Contact">
      <div className="overflow-hidden py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto items-center p-16 max-[800px]:p-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 rounded-xl shadow-xl ring-1 ring-gray-400/10 ">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <span className="title block mb-4">
                  <span className="bg-white px-7 py-1 ">Contact</span>
                </span>
                <h2 className="text-3xl leading-7 text-white py-3 leading-relaxed mt-10 max-[600px]:text-xl">
                  Estimate your project? Let me know here.
                </h2>
                <form onSubmit={onSubmit} className="text-white">
                  <input
                    type="text"
                    name="name"
                    className="form w-full mt-10"
                    placeholder="Enter Your Name"
                    autoComplete="off"
                  />
                  <input
                    type="text"
                    name="email"
                    className="form w-full mt-10"
                    placeholder="Enter Your Email"
                    autoComplete="off"
                  />
                  <div className="flex mt-10 ">
                    <input
                      type="text"
                      name="message"
                      className="form w-full"
                      placeholder="Tell me about your project"
                      autoComplete="off"
                    />
                    <button type="submit" className="btn text-3xl ">
                      <TbPointerOff className="text-red-400 " />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="image-section">
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
