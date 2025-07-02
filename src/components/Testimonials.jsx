import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import testimonialImg1 from "../assets/img/testimonials/testimonials-1.jpg";
import testimonialImg2 from "../assets/img/testimonials/testimonials-2.jpg";
import testimonialImg3 from "../assets/img/testimonials/testimonials-3.jpg";
import testimonialImg4 from "../assets/img/testimonials/testimonials-4.jpg";
import testimonialImg5 from "../assets/img/testimonials/testimonials-5.jpg";

const testimonialData = [
  {
    quote:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    image: [testimonialImg1],
    name: "Saul Goodman",
    role: "Ceo & Founder",
  },
  {
    quote:
      "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    image: [testimonialImg2],
    name: "Sara Wilsson",
    role: "Designer",
  },
  {
    quote:
      "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    image: [testimonialImg3],
    name: "Jena Karlis",
    role: "Store Owner",
  },
  {
    quote:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    image: [testimonialImg4],
    name: "Matt Brandon",
    role: "Freelancer",
  },
  {
    quote:
      "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    image: [testimonialImg5],
    name: "John Larson",
    role: "Entrepreneur",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="testimonials section light-background"
    >
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          className="init-swiper"
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView={"auto"}
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 1,
            },
          }}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{testimonial.quote}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img
                  src={testimonial.image}
                  className="testimonial-img"
                  alt={testimonial.name}
                />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.role}</h4>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
