import React from "react";

function Education() {
  return (
    <div id="Education">
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg" data-aos="fade-up">
                <span className="title block mb-4">
                  <span className="bg-white px-7 py-1 ">Qualification</span>
                </span>
                <h1 className="text-4xl font-semibold text-white mt-10">
                  My Education
                </h1>

                <div className="flex text-white mt-10 leading-8">
                  <div className="year text-lg pt-5">2021 - 2023</div>
                  <div className="vacancy-content pl-10 pt-5">
                    <p className="text-red-400">Bcom</p>
                    <h4 className="text-2xl"> Bachelor of Commerce </h4>
                    <p className="text-cyan-300">
                      Veer narmad south Gujarat University
                    </p>
                    <p className="text-gray-400">
                      Major in UI Design, UX Design, Interaction Design, User
                      Empathy, Branding.
                    </p>
                  </div>
                </div>
                <div className="flex text-white  leading-8">
                  <div className="year text-lg pt-5">2022 - 2023</div>
                  <div className="vacancy-content pl-7 pt-5">
                    <p className="text-red-400">Full Stack Web Developer</p>
                    <h4 className="text-2xl">
                      {" "}
                      Creative Multimedia Institute{" "}
                    </h4>
                    <p className="text-cyan-300">
                      Diploma in Full Stack Web Development
                    </p>
                    <p className="text-gray-400">
                      Specialized full-stack web development, focusing on both
                      frontend and backend
                    </p>
                  </div>
                </div>
                {/* <div className="flex text-white  leading-8">
                  <div className="year text-lg pt-5">2018 - 2022</div>
                  <div className="vacancy-content pl-10 pt-5">
                    <p className="text-red-400"> Full Stack Web Developer</p>
                    <h4 className="text-2xl">Creative Multimedia Institute</h4>
                    <p className="text-cyan-300">
                      Diploma in Full Stack Web Development
                    </p>
                    <p className="text-gray-400">
                      Specialized in full-stack web development, focusing on
                      both frontend and backend technologies. Gained expertise
                      in web design, UX design
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="lg:pr-8 lg:pt-4" data-aos="fade-up">
              <div className="lg:max-w-lg">
                <span className="title block mb-4">
                  <span className="bg-white px-7 py-1 ">Experiecne</span>
                </span>
                <h1 className="text-4xl font-semibold text-white mt-10">
                  My Experiecne
                </h1>
                <div className="flex text-white mt-10 leading-8">
                  <div className="year text-lg pt-5">2024</div>
                  <div className="vacancy-content pl-10 pt-5">
                    <p className="text-red-400 font-semibold">BVM Infotech</p>
                    <h4 className="text-2xl font-bold">
                      Full Stack Web Developer Intern
                    </h4>
                    <p className="text-cyan-300">
                      Contributed to In-House and Client Projects
                    </p>
                    <p className="text-gray-400">
                      Contributed to the development of full-stack applications,
                      focusing on both frontend and backend technologies.
                      Implemented responsive designs, RESTful APIs, and dynamic
                      user interfaces. Worked closely with cross-functional
                      teams to deliver high-quality web solutions while
                      enhancing user experience and performance optimization.
                    </p>
                  </div>
                </div>

                {/* <div className="flex text-white  leading-8">
                  <div className="year text-lg pt-12">2018 - 2022</div>
                  <div className="vacancy-content pl-10 pt-12">
                    <p className="text-red-400"> B.E. Computer Engineering </p>
                    <h4 className="text-2xl">IIT Kharagpur</h4>
                    <p className="text-cyan-300">
                      South University Of Bangladesh
                    </p>
                    <p className="text-gray-400">
                      Major in UI Design, UX Design, Interaction Design, User
                      Empathy, Branding.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
