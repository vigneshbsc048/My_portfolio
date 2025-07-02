import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Optional: Install PureCounter if you want animated counters, or use a React alternative
import PureCounter from "@srexi/purecounterjs";

const Skills = () => {
  useEffect(() => {
    AOS.init({ once: true });
    new PureCounter(); // initializes purecounter if included
  }, []);

  return (
    <>
      {/* Stats Section */}
      {/* <section id="stats" className="stats section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {[
              {
                icon: "bi-emoji-smile",
                end: 232,
                title: "Happy Clients",
                subtitle: "consequuntur quae",
              },
              {
                icon: "bi-journal-richtext",
                end: 521,
                title: "Projects",
                subtitle: "adipisci atque cum quia aut",
              },
              {
                icon: "bi-headset",
                end: 1453,
                title: "Hours Of Support",
                subtitle: "aut commodi quaerat",
              },
              {
                icon: "bi-people",
                end: 32,
                title: "Hard Workers",
                subtitle: "rerum asperiores dolor",
              },
            ].map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="stats-item">
                  <i className={`bi ${item.icon}`}></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end={item.end}
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>
                    <strong>{item.title}</strong> <span>{item.subtitle}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Skills Section */}
      <section id="skills" className="skills section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
          {/* some unique lines */}
          {/* Simple & Direct:
        "Technologies I use to craft fast, modern, and scalable web solutions." */}
          {/* Focused on your role:
        "Fullstack tools I work with to build seamless frontend and powerful backend applications." */}
          {/* More creative:
        "My digital toolbox – powering everything from single-page sites to full-scale platforms." */}
          {/* Professional & business-focused:
        "Core technologies I specialize in for delivering secure, responsive, and maintainable solutions." */}
          {/* Short & Catchy:
        "Here’s what I build with." */}
          <p>
            Fullstack tools I work with to build seamless frontend and powerful
            backend applications.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content skills-animation">
            {[
              [
                { name: "HTML", value: 100 },
                { name: "CSS", value: 90 },
                { name: "Boostrap", value: 90 },
                { name: "JavaScript", value: 88 },
                { name: "ReactJS", value: 80 },
              ],
              [
                { name: "Python", value: 85 },
                { name: "Django", value: 80 },
                { name: "REST frame work", value: 80 },
                { name: "Mysql and SQLite", value: 78 },
                { name: "WordPress/CMS", value: 90 },
              ],
            ].map((col, colIdx) => (
              <div className="col-lg-6" key={colIdx}>
                {col.map((skill, index) => (
                  <div className="progress" key={index}>
                    <span className="skill">
                      <span>{skill.name}</span>{" "}
                      <i className="val">{skill.value}%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${skill.value}%` }}
                        aria-valuenow={skill.value}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
