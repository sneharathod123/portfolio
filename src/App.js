import "./App.css";

import About from "./component/About";
import Contact from "./component/Contact";
import Education from "./component/Education";
import Footer from "./component/Footer";
import GotoTop from "./component/GotoTop";
import Header from "./component/Header";
import Portfolio from "./component/Portfolio";
import Service from "./component/Service";
import Skill from "./component/Skill";
import Testimonial from "./component/Testimonial";
import Weapons from "./component/Weapons";

function App() {
  return (
    <>
      <Header />
      <About />
      <Service />
      <Skill />
      <Education />
      <Portfolio />
      <Testimonial />
      <Weapons />
      <Contact />
      <Footer />
      <GotoTop />
    </>
  );
}

export default App;
