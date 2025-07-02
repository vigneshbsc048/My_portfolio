import React from "react";
// import profileImg from "../assets/img/my-profile-img.jpg"; // Ensure the image path is correct
import profileImg from "../assets/img/banner5.jpg";
// import profileImg from "../assets/img/myphoto.jpg"; // Ensure the image path is correct

const About = () => {
  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        {/* <p>
          I'm with 3+ years of experience in fullstack web development, I
          specialize in building responsive websites using ReactJS, Python, and
          WordPress. I help startups & small businesses bring their ideas to
          life with fast, scalable, and SEO-friendly solutions
        </p> */}
        <p>
          I'm a Full Stack Web Developer with 3 years of experience,
          specializing in building fast, modern, and SEO-friendly websites using
          ReactJS, Python, and WordPress. I work with startups and small
          businesses to bring their ideas online with clean UI, scalable
          backends, and full technical support—from domain setup to deployment.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src={profileImg} className="img-fluid" alt="Profile" />
          </div>
          <div className="col-lg-8 content">
            {/* <h2>UI/UX Designer &amp; Web Developer.</h2> */}
            <h2>Full Stack Web Developer.</h2>
            <p className="fst-italic py-3">
              I’m passionate about building full-featured web solutions, from
              landing pages to custom dashboards. Whether it’s a ReactJS
              frontend or a Python API backend, I focused on performance, user
              experience, and clean code.
            </p>

            <div className="row">
              <div className="col-lg-6">
                <ul>
                  {/* <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Birthday:</strong> <span>1 May 1995</span>
                  </li> */}
                  {/* <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Website:</strong> <span>www.example.com</span>
                  </li> */}
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Name:</strong> <span>Vignesh Kumar</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong> <span>78717-64866</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong>{" "}
                    <span>B.Sc ( computer science )</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Age:</strong> <span>26</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Email:</strong> <span>vigneshbsc048@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>City:</strong> <span>Madurai, Tamil Nadu</span>
                  </li>
                  {/* <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li> */}
                </ul>
              </div>
            </div>

            <p className="py-3">
              My goal is to help businesses and entrepreneurs have a strong
              digital presence. From e-commerce websites to fully custom web
              apps, I deliver clean, scalable, and maintainable solutions. I
              also offer domain/hosting setup and long-term support plans to
              keep your site running smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
