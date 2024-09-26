import React, { useEffect, useState } from "react";

function Skill() {
  const [progressOne, setProgressOne] = useState(1);
  const [progressTwo, setProgressTwo] = useState(1);
  const [progressThree, setProgressThree] = useState(1);
  const [progressFour, setPogressFour] = useState(1);

  // Simulate loading progress after component mounts
  useEffect(() => {
    setTimeout(() => {
      setProgressOne(60);
      setProgressTwo(80);
      setProgressThree(90);
      setPogressFour(80);
    }, 100);
  }, []);

  return (
    <div>
      <div id="Skills">
        <div className="overflow-hidden py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <span className="title block mb-4">
                    <span className="bg-white px-7 py-1 ">Skill</span>
                  </span>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-stone-200 sm:text-4xl py-3">
                    As a Developer i am good at fit with few skills.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-400">
                    All desigener have good skills to make sure satisfied their
                    clints, As a Developer I am also specialised few{" "}
                    <span className="text-red-400"> skills.</span>
                  </p>
                  <div className="progress-text text-white flex justify-between">
                    <h4>HTML</h4>
                    <h4>{progressThree}%</h4>
                  </div>
                  <div className="bg-gray-200 h-1.5 w-full rounded-full">
                    <div
                      className="bg-gradient-to-br from-red-500 to-red-800 h-1.5 w-1 rounded-full transition-all"
                      style={{
                        width: `${progressThree}%`,
                        transition: "width 3s",
                      }}
                    ></div>
                  </div>
                  <div className="mt-10">
                    <div className="progress-text text-white flex justify-between">
                      <h4>javaScript</h4>
                      <h4>{progressOne}%</h4>
                    </div>
                    <div className="bg-gray-200 h-1.5 w-full rounded-full">
                      <div
                        className="bg-gradient-to-br from-green-500 to-green-800 h-1.5 w-1 rounded-full animate-pulse transition-all"
                        style={{
                          width: `${progressOne}%`,
                          transition: "width 3s",
                        }}
                      ></div>
                    </div>
                    <div className="mb-10"></div>
                    <div className="progress-text text-white flex justify-between">
                      <h4>React.Js</h4>
                      <h4>{progressTwo}%</h4>
                    </div>
                    <div className="bg-gray-200 h-1.5 w-full rounded-full">
                      <div
                        className="bg-gradient-to-br from-blue-500 to-blue-800 h-1.5 w-1 rounded-full animate-pulse transition-all"
                        style={{
                          width: `${progressTwo}%`,
                          transition: "width 3s",
                        }}
                      ></div>
                    </div>
                    <div className="mb-10"></div>

                    <div className="progress-text text-white flex justify-between mt-10">
                      <h4>Node.Js</h4>
                      <h4>{progressFour}%</h4>
                    </div>
                    <div className="bg-gray-200 h-1.5   w-full rounded-full">
                      <div
                        className="bg-gradient-to-br bg-cyan-300 h-1.5 w-1 rounded-full transition-all"
                        style={{
                          width: `${progressFour}%`,
                          transition: "width 3s",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-section relative">
                <img
                  alt="Product screenshot"
                  src={require("../assets/skills-dark.png")}
                  width={2432}
                  height={1442}
                />
                <img
                  src={require("../assets/shape-one-dark.png")}
                  alt="image"
                  className="absolute left-36 top-0"
                />
                <img
                  src={require("../assets/shape-two-dark.png")}
                  alt="image"
                  className="absolute right-36 top-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
