import "./App.css";

import About from "./component/About";
import Contact from "./component/Contact";
import Education from "./component/Education";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Service from "./component/Service";
import Skill from "./component/Skill";
import Testimonial from "./component/Testimonial";
import Weapons from "./component/Weapons";
import Works from "./component/Works";

function App() {
  return (
    <>
      <Header />
      <About />
      <Service />
      <Skill />
      <Education />
      <Works />
      <Testimonial />
      <Weapons />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
