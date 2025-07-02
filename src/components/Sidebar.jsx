// import React from "react";
// import profileImg from "../assets/img/my-profile-img.jpg"; // adjust path if needed

// const Sidebar = () => {
//   return (
//     <header id="header" className="header dark-background d-flex flex-column">
//       <i className="header-toggle d-xl-none bi bi-list"></i>

//       <div className="profile-img">
//         <img
//           src={profileImg}
//           alt="Profile"
//           className="img-fluid rounded-circle"
//         />
//       </div>

//       <a
//         href="index.html"
//         className="logo d-flex align-items-center justify-content-center"
//       >
//         {/* Uncomment the line below if you also wish to use an image logo */}
//         {/* <img src="../assets/img/logo.png" alt="Logo" /> */}
//         <h1 className="sitename">Vignesh Kumar</h1>
//       </a>

//       <div className="social-links text-center">
//         <a href="#" className="instagram">
//           <i className="bi bi-instagram"></i>
//         </a>
//         <a
//           href="https://github.com/vigneshkumargithub?tab=repositories"
//           className="google-plus"
//         >
//           <i className="bi bi-github"></i>
//         </a>
//         <a
//           href="https://www.linkedin.com/in/vignesh-kumar-n-r-a40702256/"
//           className="linkedin"
//         >
//           <i className="bi bi-linkedin"></i>
//         </a>
//       </div>

//       <nav id="navmenu" className="navmenu">
//         <ul>
//           <li>
//             <a href="#hero" className="active">
//               <i className="bi bi-house navicon"></i> Home
//             </a>
//           </li>
//           <li>
//             <a href="#about">
//               <i className="bi bi-person navicon"></i> About
//             </a>
//           </li>
//           <li>
//             <a href="#resume">
//               <i className="bi bi-file-earmark-text navicon"></i> Resume
//             </a>
//           </li>
//           <li>
//             <a href="#portfolio">
//               <i className="bi bi-images navicon"></i> Portfolio
//             </a>
//           </li>
//           <li>
//             <a href="#services">
//               <i className="bi bi-hdd-stack navicon"></i> Services
//             </a>
//           </li>
//           <li>
//             <a href="#contact">
//               <i className="bi bi-envelope navicon"></i> Contact
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Sidebar;

//////////////////////////
/////////////////// updated .....

// import React, { useState } from "react";
// // import profileImg from "../assets/img/my-profile-img.jpg";
// import profileImg from "../assets/img/myphoto.jpg";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen((prev) => !prev);
//   };

//   return (
//     <header
//       id="header"
//       className={`header dark-background d-flex flex-column ${
//         isOpen ? "show-menu" : ""
//       }`}
//     >
//       {/* Hamburger Icon */}
//       <i
//         className={`header-toggle d-xl-none bi ${isOpen ? "bi-x" : "bi-list"}`}
//         onClick={handleToggle}
//         style={{ fontSize: "1.8rem", padding: "10px", cursor: "pointer" }}
//       ></i>

//       {/* Profile Image */}
//       <div className="profile-img">
//         <img
//           src={profileImg}
//           alt="Profile"
//           className="img-fluid rounded-circle"
//         />
//       </div>

//       {/* Site Name / Logo */}
//       <a
//         href="index.html"
//         className="logo d-flex align-items-center justify-content-center"
//       >
//         <h1 className="sitename">Vignesh Kumar</h1>
//       </a>

//       {/* Social Links */}
//       <div className="social-links text-center">
//         <a href="#" className="instagram">
//           <i className="bi bi-instagram"></i>
//         </a>
//         <a
//           href="https://github.com/vigneshkumargithub?tab=repositories"
//           className="google-plus"
//         >
//           <i className="bi bi-github"></i>
//         </a>
//         <a
//           href="https://www.linkedin.com/in/vignesh-kumar-n-r-a40702256/"
//           className="linkedin"
//         >
//           <i className="bi bi-linkedin"></i>
//         </a>
//       </div>

//       {/* Nav Menu */}
//       <nav id="navmenu" className="navmenu">
//         <ul>
//           <li>
//             <a href="#hero" className="active" onClick={() => setIsOpen(false)}>
//               <i className="bi bi-house navicon"></i> Home
//             </a>
//           </li>
//           <li>
//             <a href="#about" onClick={() => setIsOpen(false)}>
//               <i className="bi bi-person navicon"></i> About
//             </a>
//           </li>
//           <li>
//             <a href="#resume" onClick={() => setIsOpen(false)}>
//               <i className="bi bi-file-earmark-text navicon"></i> Resume
//             </a>
//           </li>
//           <li>
//             <a href="#portfolio" onClick={() => setIsOpen(false)}>
//               <i className="bi bi-images navicon"></i> Portfolio
//             </a>
//           </li>
//           {/* <li>
//             <a href="#services" onClick={() => setIsOpen(false)}>
//               <i className="bi bi-hdd-stack navicon"></i> Services
//             </a>
//           </li> */}
//           <li>
//             <a href="#contact" onClick={() => setIsOpen(false)}>
//               <i className="bi bi-envelope navicon"></i> Contact
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Sidebar;

////////// another file of active link set...

import React, { useState, useEffect } from "react";
import profileImg from "../assets/img/myphoto.jpg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Scroll spy effect
  useEffect(() => {
    const sections = ["hero", "about", "resume", "portfolio", "contact"];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home", icon: "bi-house" },
    { id: "about", label: "About", icon: "bi-person" },
    { id: "resume", label: "Resume", icon: "bi-file-earmark-text" },
    { id: "portfolio", label: "Portfolio", icon: "bi-images" },
    { id: "contact", label: "Contact", icon: "bi-envelope" },
  ];

  return (
    <header
      id="header"
      className={`header dark-background d-flex flex-column ${
        isOpen ? "show-menu" : ""
      }`}
    >
      {/* Toggle Icon */}
      <i
        className={`header-toggle d-xl-none bi ${isOpen ? "bi-x" : "bi-list"}`}
        onClick={handleToggle}
        style={{ fontSize: "1.8rem", padding: "10px", cursor: "pointer" }}
      ></i>

      {/* Profile Image */}
      <div className="profile-img">
        <img
          src={profileImg}
          alt="Profile"
          className="img-fluid rounded-circle"
        />
      </div>

      {/* Site Name */}
      <a
        href="index.html"
        className="logo d-flex align-items-center justify-content-center"
      >
        <h1 className="sitename">Vignesh Kumar</h1>
      </a>

      {/* Social Links */}
      <div className="social-links text-center">
        <a href="#" className="instagram">
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://github.com/vigneshkumargithub?tab=repositories"
          className="google-plus"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/vignesh-kumar-n-r-a40702256/"
          className="linkedin"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </div>

      {/* Navigation */}
      <nav id="navmenu" className="navmenu">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <i className={`bi ${item.icon} navicon`}></i> {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Sidebar;
