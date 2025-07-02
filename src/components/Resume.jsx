import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Resume = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="resume" className="resume section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          Experienced Full Stack Developer with a strong background in ReactJS,
          Python, and WordPress. Skilled in building dynamic web applications,
          e-commerce sites, and backend APIs.
        </p>
      </div>

      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Vignesh Kumar</h4>
              <p>
                <em>
                  I have 3 years of experience as a Fullstack Web Developer,
                  working with ReactJS, Python (Django), and WordPress. I’ve
                  successfully delivered projects ranging from dynamic web apps
                  to responsive business and e-commerce websites. With expertise
                  in both frontend and backend, I handle complete project
                  lifecycles — from design to deployment.
                </em>
              </p>
              <h4>Projects</h4>
              <ul>
                {/* <li>Portland par 127, Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li> */}
                <li>Buildo Web</li>
                <li>Phoenix Marketing Website</li>
                <li>Ecommerce Site</li>
                <li>School CRM</li>
                <li>Data Collection Project</li>
                <li>Anbodu Agathiya Website</li>
                <li>MC Company (WordPress)</li>
                <li>Cars Infinite (WordPress)</li>
                <li>Mobilesquard (WordPress)</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            {/* <div className="resume-item">
              <h4>Master of Fine Arts &amp; Graphic Design</h4>
              <h5>2015 - 2016</h5>
              <p>
                <em>Rochester Institute of Technology, Rochester, NY</em>
              </p>
              <p>
                Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam
                iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti
                nerada porti sand markend.
              </p>
            </div> */}

            <div className="resume-item">
              <h4>Bachelor of Computer &amp; Science</h4>
              <h5>2016 - 2019</h5>
              <p>
                <em>Sourashtra College, Madurai, Tamil Nadu</em>
              </p>
              {/* <p>
                Quia nobis sequi est occaecati aut. Repudiandae et iusto quae
                reiciendis et quis. Eius vel ratione eius unde vitae rerum
                voluptates asperiores voluptatem. Earum molestiae consequatur
                neque.
              </p> */}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>

            <div className="resume-item">
              <h4>Full-stack web developer</h4>
              <p>
                <em>Phoenix Marketing</em>
              </p>
              <h5>01-2024 - Present</h5>

              <ul>
                <li>
                  Developed 2 fullstack web applications using ReactJS for the
                  frontend and Django for the backend, with full API
                  integration.
                </li>
                <li>
                  Implemented secure authentication, admin dashboards, and REST
                  APIs for dynamic, data-driven web apps.
                </li>
                <li>
                  Built and deployed 4 custom WordPress websites including
                  e-commerce stores and business sites with full SEO
                  optimization.
                </li>
                <li>
                  Handled end-to-end project setup including domain, hosting,
                  performance tuning, and client handover documentation.
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Full-stack web developer</h4>
              <p>
                <em>Bugtreat Technologies</em>
              </p>
              <h5>06/2022 - 12/2023</h5>
              <ul>
                <li>
                  Built and deployed a fullstack project – “Buildo” – using
                  ReactJS frontend and Django backend.
                </li>
                <li>
                  Focused on clean component-based UI, backend API design, and
                  secure user management.
                </li>
                <li>
                  Collaborated with team to design scalable database models and
                  optimize app performance.
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>US Healthcare Process</h4>
              <p>
                <em>sourceHOV(Excela Technologies)</em>
              </p>
              <h5>12/2020 - 03/2022</h5>
              <ul>
                <li>
                  Worked in a US-based healthcare process for 2 years, handling
                  insurance claims and medical billing support.
                </li>
                <li>
                  Managed patient data, eligibility verification, and claim
                  submission processes with accuracy.
                </li>
                <li>
                  Collaborated with teams to resolve billing issues and ensure
                  compliance with HIPAA regulations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
