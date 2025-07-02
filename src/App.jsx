// import "./App.css";
import "./assets/css/main.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Service from "./components/Service";
import Sidebar from "./components/Sidebar";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

AOS.init();

// for message toast using ( React suite)
// import "rsuite/dist/rsuite.min.css";

import { Toast } from "primereact/toast";
import { useRef } from "react";

function App() {
  const toast = useRef(null); ///// inga toast use panna ella section , conact alert success msg ah scholl pannalum show agum.. because (toastRef) props ah use paniruken
  return (
    <>
      {/* Global Toast (always visible) */}
      <Toast ref={toast} />
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Skills />
        {/* <Service /> */}
        <Resume />
        <Project />
        {/* <Testimonials /> */}
        {/* Pass toast ref as prop to child components */}
        <Contact toastRef={toast} /> {/*prime react alert message*/}
        {/* <Contact  />  */}
        {/*Normal react Tostify alert mesg  */}
      </main>
    </>
  );
}

export default App;
