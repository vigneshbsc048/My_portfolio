// import React from "react";
// import projectImg1 from "../assets/img/portfolio/app-1.jpg";
// import projectImg2 from "../assets/img/portfolio/product-1.jpg";
// import projectImg3 from "../assets/img/portfolio/branding-1.jpg";
// import projectImg4 from "../assets/img/portfolio/books-1.jpg";
// import projectImg5 from "../assets/img/portfolio/app-2.jpg";
// import projectImg6 from "../assets/img/portfolio/product-2.jpg";
// import projectImg7 from "../assets/img/portfolio/branding-2.jpg";
// import projectImg8 from "../assets/img/portfolio/books-2.jpg";
// import projectImg9 from "../assets/img/portfolio/app-3.jpg";
// import projectImg10 from "../assets/img/portfolio/product-3.jpg";
// import projectImg11 from "../assets/img/portfolio/branding-3.jpg";
// import projectImg12 from "../assets/img/portfolio/books-3.jpg";

// const Project = () => {
//   const portfolioItems = [
//     {
//       filter: "app",
//       title: "App 1",
//       img: [projectImg1],
//     },
//     {
//       filter: "product",
//       title: "Product 1",
//       img: [projectImg2],
//     },
//     {
//       filter: "branding",
//       title: "Branding 1",
//       img: [projectImg3],
//     },
//     {
//       filter: "books",
//       title: "Books 1",
//       img: [projectImg4],
//     },
//     {
//       filter: "app",
//       title: "App 2",
//       img: [projectImg5],
//     },
//     {
//       filter: "product",
//       title: "Product 2",
//       img: [projectImg6],
//     },
//     {
//       filter: "branding",
//       title: "Branding 2",
//       img: [projectImg7],
//     },
//     {
//       filter: "books",
//       title: "Books 2",
//       img: [projectImg8],
//     },
//     {
//       filter: "app",
//       title: "App 3",
//       img: [projectImg9],
//     },
//     {
//       filter: "product",
//       title: "Product 3",
//       img: [projectImg10],
//     },
//     {
//       filter: "branding",
//       title: "Branding 3",
//       img: [projectImg11],
//     },
//     {
//       filter: "books",
//       title: "Books 3",
//       img: [projectImg12],
//     },
//   ];

//   const filters = ["All", "App", "Product", "Branding", "Books"];

//   return (
//     <section id="portfolio" className="portfolio section light-background">
//       <div className="container section-title" data-aos="fade-up">
//         <h2>Portfolio</h2>
//         <p>
//           Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
//           aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
//           quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
//           fugiat sit in iste officiis commodi quidem hic quas.
//         </p>
//       </div>

//       <div className="container">
//         <div
//           className="isotope-layout"
//           data-default-filter="*"
//           data-layout="masonry"
//           data-sort="original-order"
//         >
//           <ul
//             className="portfolio-filters isotope-filters"
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             {filters.map((filter, index) => (
//               <li
//                 key={index}
//                 data-filter={`.${
//                   filter === "All" ? "*" : `filter-${filter.toLowerCase()}`
//                 }`}
//                 className={filter === "All" ? "filter-active" : ""}
//               >
//                 {filter}
//               </li>
//             ))}
//           </ul>

//           <div
//             className="row gy-4 isotope-container"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             {portfolioItems.map((item, index) => (
//               <div
//                 key={index}
//                 className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${item.filter}`}
//               >
//                 <div className="portfolio-content h-100">
//                   <img src={item.img} className="img-fluid" alt={item.title} />
//                   <div className="portfolio-info">
//                     <h4>{item.title}</h4>
//                     <p>Lorem ipsum, dolor sit amet consectetur</p>
//                     <a
//                       href={item.img}
//                       title={item.title}
//                       data-gallery={`portfolio-gallery-${item.filter}`}
//                       className="glightbox preview-link"
//                     >
//                       <i className="bi bi-zoom-in"></i>
//                     </a>
//                     <a
//                       href="portfolio-details.html"
//                       title="More Details"
//                       className="details-link"
//                     >
//                       <i className="bi bi-link-45deg"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Project;

// import React, { useState } from "react";
// import projectImg1 from "../assets/img/portfolio/app-1.jpg";
// import projectImg2 from "../assets/img/portfolio/product-1.jpg";
// import projectImg3 from "../assets/img/portfolio/branding-1.jpg";
// import projectImg4 from "../assets/img/portfolio/books-1.jpg";
// import projectImg5 from "../assets/img/portfolio/app-2.jpg";
// import projectImg6 from "../assets/img/portfolio/product-2.jpg";
// import projectImg7 from "../assets/img/portfolio/branding-2.jpg";
// import projectImg8 from "../assets/img/portfolio/books-2.jpg";
// import projectImg9 from "../assets/img/portfolio/app-3.jpg";
// import projectImg10 from "../assets/img/portfolio/product-3.jpg";
// import projectImg11 from "../assets/img/portfolio/branding-3.jpg";
// import projectImg12 from "../assets/img/portfolio/books-3.jpg";

// const Project = () => {
//   const [activeFilter, setActiveFilter] = useState("All");

//   const portfolioItems = [
//     { filter: "app", title: "App 1", img: projectImg1 },
//     { filter: "product", title: "Product 1", img: projectImg2 },
//     { filter: "branding", title: "Branding 1", img: projectImg3 },
//     { filter: "books", title: "Books 1", img: projectImg4 },
//     { filter: "app", title: "App 2", img: projectImg5 },
//     { filter: "product", title: "Product 2", img: projectImg6 },
//     { filter: "branding", title: "Branding 2", img: projectImg7 },
//     { filter: "books", title: "Books 2", img: projectImg8 },
//     { filter: "app", title: "App 3", img: projectImg9 },
//     { filter: "product", title: "Product 3", img: projectImg10 },
//     { filter: "branding", title: "Branding 3", img: projectImg11 },
//     { filter: "books", title: "Books 3", img: projectImg12 },
//   ];

//   const filters = ["All", "App", "Product", "Branding", "Books"];

//   // Filter logic based on activeFilter
//   const filteredItems =
//     activeFilter === "All"
//       ? portfolioItems
//       : portfolioItems.filter(
//           (item) => item.filter.toLowerCase() === activeFilter.toLowerCase()
//         );

//   return (
//     <section id="portfolio" className="portfolio section light-background">
//       <div className="container section-title" data-aos="fade-up">
//         <h2>Portfolio</h2>
//         <p>
//           Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
//           aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
//           quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
//           fugiat sit in iste officiis commodi quidem hic quas.
//         </p>
//       </div>

//       <div className="container">
//         <ul
//           className="portfolio-filters"
//           data-aos="fade-up"
//           data-aos-delay="100"
//         >
//           {filters.map((filter, index) => (
//             <li
//               key={index}
//               onClick={() => setActiveFilter(filter)}
//               className={activeFilter === filter ? "filter-active" : ""}
//               style={{
//                 cursor: "pointer",
//                 display: "inline-block",
//                 marginRight: "15px",
//               }}
//             >
//               {filter}
//             </li>
//           ))}
//         </ul>

//         <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">
//           {filteredItems.map((item, index) => (
//             <div key={index} className="col-lg-4 col-md-6 portfolio-item">
//               <div className="portfolio-content h-100">
//                 <img src={item.img} className="img-fluid" alt={item.title} />
//                 <div className="portfolio-info">
//                   <h4>{item.title}</h4>
//                   <p>Lorem ipsum, dolor sit amet consectetur</p>
//                   <a
//                     href={item.img}
//                     title={item.title}
//                     data-gallery={`portfolio-gallery-${item.filter}`}
//                     className="glightbox preview-link"
//                   >
//                     <i className="bi bi-zoom-in"></i>
//                   </a>
//                   <a
//                     href="portfolio-details.html"
//                     title="More Details"
//                     className="details-link"
//                   >
//                     <i className="bi bi-link-45deg"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Project;

/////////////// smooth transition effect work agum.... but ela website kum same ah lik kudukura mari iruku...

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import projectImg1 from "../assets/img/myimg/buildo_site.jpg";
// import projectImg2 from "../assets/img/myimg/mccompany_site.jpeg";
// import projectImg3 from "../assets/img/myimg/sclcrm_signup.png";
// import projectImg4 from "../assets/img/myimg/phoenix_site.jpeg";
// import projectImg5 from "../assets/img/myimg/mobilesquad_site.jpeg";
// import projectImg6 from "../assets/img/myimg/princi_dashboard.png";
// import projectImg7 from "../assets/img/myimg/agathiya_site.jpeg";
// import projectImg8 from "../assets/img/myimg/cars_site.png";
// import projectImg9 from "../assets/img/myimg/staff_dashboard.png";

// const Project = () => {
//   const [activeFilter, setActiveFilter] = useState("All");

//   const portfolioItems = [
//     { filter: "Website", title: "Website 1", img: projectImg1 },
//     { filter: "Wp-Websites", title: "Wp-Websites 1", img: projectImg2 },
//     { filter: "CRM", title: "CRM 1", img: projectImg3 },
//     { filter: "Website", title: "Website 2", img: projectImg4 },
//     { filter: "Wp-Websites", title: "Wp-Websites 2", img: projectImg5 },
//     { filter: "CRM", title: "CRM 2", img: projectImg6 },
//     { filter: "Website", title: "Website 3", img: projectImg7 },
//     { filter: "Wp-Websites", title: "Wp-Websites 3", img: projectImg8 },
//     { filter: "CRM", title: "CRM 3", img: projectImg9 },
//   ];

//   const filters = ["All", "Website", "Wp-Websites", "CRM"];
//   // const filters = ["All", "App", "Product", "Branding", "Books"];
//   const filteredItems =
//     activeFilter === "All"
//       ? portfolioItems
//       : portfolioItems.filter(
//           (item) => item.filter.toLowerCase() === activeFilter.toLowerCase()
//         );

//   return (
//     <section id="portfolio" className="portfolio section light-background">
//       <div className="container section-title" data-aos="fade-up">
//         <h2>Projects</h2>
//         {/* single line portfolio summery */}
//         {/* "Here are some of the websites and applications I’ve designed and developed recently." */}
//         {/* "A selection of my work — from fullstack web apps to responsive WordPress websites." */}
//         {/* "Take a look at my recent projects built with ReactJS, Django, and WordPress." */}
//         {/* "Real-world projects I’ve built for businesses, startups, and personal clients." */}
//         {/* "Crafted with clean code, performance, and user experience in mind." */}
//         <p>
//           Take a look at my recent projects built with ReactJS, Django, and
//           WordPress.
//         </p>
//       </div>

//       <div className="container">
//         <ul
//           className="portfolio-filters"
//           data-aos="fade-up"
//           data-aos-delay="100"
//         >
//           {filters.map((filter, index) => (
//             <li
//               key={index}
//               onClick={() => setActiveFilter(filter)}
//               className={activeFilter === filter ? "filter-active" : ""}
//               style={{
//                 cursor: "pointer",
//                 display: "inline-block",
//                 marginRight: "15px",
//               }}
//             >
//               {filter}
//             </li>
//           ))}
//         </ul>

//         <motion.div
//           layout
//           className="row gy-4"
//           data-aos="fade-up"
//           data-aos-delay="200"
//         >
//           <AnimatePresence>
//             {filteredItems.map((item, index) => (
//               <motion.div
//                 key={item.title}
//                 layout
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.95 }}
//                 transition={{ duration: 0.3 }}
//                 className="col-lg-4 col-md-6 portfolio-item"
//               >
//                 <div className="portfolio-content h-100">
//                   <img src={item.img} className="img-fluid" alt={item.title} />
//                   <div className="portfolio-info">
//                     <h4>{item.title}</h4>
//                     <p>Website</p>
//                     <a
//                       href={item.img}
//                       title={item.title}
//                       data-gallery={`portfolio-gallery-${item.filter}`}
//                       className="glightbox preview-link"
//                     >
//                       <i className="bi bi-zoom-in"></i>
//                     </a>
//                     <a
//                       href="portfolio-details.html"
//                       title="More Details"
//                       className="details-link"
//                     >
//                       <i className="bi bi-link-45deg"></i>
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Project;

//////////////// new  method ....

//////////////// //

/////// ela wesbite ku thani thani ( seprated ah ) link generate panra mari iruku..

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import projectImg1 from "../assets/img/myimg/buildo_site.jpg";
import projectImg2 from "../assets/img/myimg/mccompany_site.jpeg";
import projectImg3 from "../assets/img/myimg/sclcrm_signup.png";
import projectImg4 from "../assets/img/myimg/phoenix_site.jpeg";
import projectImg5 from "../assets/img/myimg/mobilesquad_site.jpeg";
import projectImg6 from "../assets/img/myimg/princi_dashboard.png";
import projectImg7 from "../assets/img/myimg/agathiya_site.jpeg";
import projectImg8 from "../assets/img/myimg/cars_site.png";
import projectImg9 from "../assets/img/myimg/staff_dashboard.png";

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const portfolioItems = [
    {
      filter: "Website",
      title: "Buildo Website",
      img: projectImg1,
      description: "A modern business website built with ReactJS and Django.",
      link: "https://buildoweb.in",
    },
    {
      filter: "Wp-Websites",
      title: "MC Company",
      img: projectImg2,
      description: "Corporate WordPress site for a manufacturing company.",
      link: "https://mccompany.in",
    },
    {
      filter: "CRM",
      title: "School CRM",
      img: projectImg3,
      description:
        "Custom CRM built for student & lead management using Django.",
      link: "#",
    },
    {
      filter: "Website",
      title: "Phoenix Marketing",
      img: projectImg4,
      description:
        "Responsive service website for an digital marketing and seo based company.",
      link: "https://phoenixmarketing.in/",
    },
    {
      filter: "Wp-Websites",
      title: "Mobile Squad",
      img: projectImg5,
      description: "Mobile repair business website using WordPress.",
      link: "https://mobilesquad.in/",
    },
    {
      filter: "CRM",
      title: "Principal Dashboard",
      img: projectImg6,
      description: "Dashboard interface for school principals, made in Django.",
      link: "#",
    },
    {
      filter: "Website",
      title: "Agathiya",
      img: projectImg7,
      description: "Website for a trauma & inner child healer.",
      link: "https://anboduagathiya.com/",
    },
    {
      filter: "Wp-Websites",
      title: "Car Rentals",
      img: projectImg8,
      description: "Dynamic WordPress-based car booking site.",
      link: "https://carsinfinite.com/",
    },
    {
      filter: "CRM",
      title: "Staff Dashboard",
      img: projectImg9,
      description: "Internal staff dashboard built with Python and React.",
      link: "#",
    },
  ];

  const filters = ["All", "Website", "Wp-Websites", "CRM"];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.filter.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Projects</h2>
        <p>
          Take a look at my recent projects built with ReactJS, Django, and
          WordPress.
        </p>
      </div>

      <div className="container">
        <ul
          className="portfolio-filters"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {filters.map((filter, index) => (
            <li
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter ? "filter-active" : ""}
              style={{
                cursor: "pointer",
                display: "inline-block",
                marginRight: "15px",
              }}
            >
              {filter}
            </li>
          ))}
        </ul>

        <motion.div
          layout
          className="row gy-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="col-lg-4 col-md-6 portfolio-item"
              >
                <div className="portfolio-content h-100">
                  <img src={item.img} className="img-fluid" alt={item.title} />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <a
                      href={item.img}
                      title={item.title}
                      data-gallery={`portfolio-gallery-${item.filter}`}
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href={item.link}
                      title="View Project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
