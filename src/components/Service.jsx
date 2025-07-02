import React from "react";

const Service = () => {
  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {[
            {
              icon: "bi-briefcase",
              title: "Lorem Ipsum",
              link: "service-details.html",
              description:
                "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
              delay: "100",
            },
            {
              icon: "bi-card-checklist",
              title: "Dolor Sitema",
              link: "service-details.html",
              description:
                "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
              delay: "200",
            },
            {
              icon: "bi-bar-chart",
              title: "Sed ut perspiciatis",
              link: "service-details.html",
              description:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
              delay: "300",
            },
            {
              icon: "bi-binoculars",
              title: "Magni Dolores",
              link: "service-details.html",
              description:
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
              delay: "400",
            },
            {
              icon: "bi-brightness-high",
              title: "Nemo Enim",
              link: "service-details.html",
              description:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
              delay: "500",
            },
            {
              icon: "bi-calendar4-week",
              title: "Eiusmod Tempor",
              link: "service-details.html",
              description:
                "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
              delay: "600",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="icon flex-shrink-0">
                <i className={`bi ${service.icon}`}></i>
              </div>
              <div>
                <h4 className="title">
                  <a href={service.link} className="stretched-link">
                    {service.title}
                  </a>
                </h4>
                <p className="description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
