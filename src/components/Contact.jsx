////// below mentioned origial file contact panna detaills ellam mail la send agum, after toast msg um katum
///// Toastify and prime react ( alert message library use paniruken)

// ////////// working for contact form functionalities.... correct ah work aguthu...
// ////////// using tostify method

// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// // import { Message, useToaster } from "rsuite";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = () => {
//   const form = useRef();
//   const [sent, setSent] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   //   const toaster = useToaster();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .sendForm(
//         "gmail", // e.g., "service_xxx123"
//         "template_id", // e.g., "template_abc456"
//         form.current,
//         "jtidSjVaryTzJbFdz" // e.g., "XyzABC123456"
//       )
//       .then((result) => {
//         setSent(true);
//         setLoading(false);
//         form.current.reset();
//         toast.success("Message sent successfully!", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       });
//   };

//   return (
//     <section id="contact" className="contact section">
//       <div className="container section-title" data-aos="fade-up">
//         <h2>Contact</h2>
//       </div>

//       <div className="container" data-aos="fade-up" data-aos-delay="100">
//         <div className="row gy-4">
//           {/* Contact Info */}
//           <div className="col-lg-5">
//             <div className="info-wrap">
//               <div
//                 className="info-item d-flex"
//                 data-aos="fade-up"
//                 data-aos-delay="200"
//               >
//                 <i className="bi bi-geo-alt flex-shrink-0"></i>
//                 <div>
//                   <h3>Address</h3>
//                   <p>Madurai, Tamil Nadu</p>
//                 </div>
//               </div>

//               <div
//                 className="info-item d-flex"
//                 data-aos="fade-up"
//                 data-aos-delay="300"
//               >
//                 <i className="bi bi-telephone flex-shrink-0"></i>
//                 <div>
//                   <h3>Call Us</h3>
//                   <p>+91 98765 43210</p>
//                 </div>
//               </div>

//               <div
//                 className="info-item d-flex"
//                 data-aos="fade-up"
//                 data-aos-delay="400"
//               >
//                 <i className="bi bi-envelope flex-shrink-0"></i>
//                 <div>
//                   <h3>Email Us</h3>
//                   <p>vigneshbsc048@gmail.com</p>
//                 </div>
//               </div>

//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121017.21181816205!2d78.04042174433806!3d9.917826796761636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1751109856361!5m2!1sen!2sin"
//                 frameBorder="0"
//                 style={{ border: 0, width: "100%", height: "270px" }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Google Map"
//               ></iframe>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="col-lg-7">
//             <form
//               ref={form}
//               onSubmit={sendEmail}
//               className="php-email-form"
//               data-aos="fade-up"
//               data-aos-delay="200"
//             >
//               <div className="row gy-4">
//                 <div className="col-md-6">
//                   <label htmlFor="username">Your Name</label>
//                   <input
//                     type="text"
//                     name="username"
//                     className="form-control"
//                     required
//                   />
//                 </div>

//                 <div className="col-md-6">
//                   <label htmlFor="emailid">Your Email</label>
//                   <input
//                     type="email"
//                     name="emailid"
//                     className="form-control"
//                     required
//                   />
//                 </div>

//                 <div className="col-md-12">
//                   <label htmlFor="phonenumber">Ph-number</label>
//                   <input
//                     type="number"
//                     name="phonenumber"
//                     className="form-control"
//                     required
//                   />
//                 </div>

//                 <div className="col-md-12">
//                   <label htmlFor="message">Message</label>
//                   <textarea
//                     name="message"
//                     rows="10"
//                     className="form-control"
//                     required
//                   ></textarea>
//                 </div>

//                 <div className="col-md-12 text-center">
//                   {loading && <div className="loading">Sending...</div>}
//                   {error && <div className="error-message">{error}</div>}
//                   <button type="submit" disabled={loading}>
//                     Send Message
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </section>
//   );
// };

// export default Contact;

//////////// Alert message ku React prime nu oru library use pannathu...
//////// but contact section la matum the message show agum...

// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { Toast } from "primereact/toast";

// // Required PrimeReact styles should be imported in your main entry (index.js or App.js):
// // import 'primereact/resources/themes/lara-light-blue/theme.css';
// // import 'primereact/resources/primereact.min.css';
// // import 'primeicons/primeicons.css';

// const Contact = () => {
//   const form = useRef();
//   const toast = useRef(null);

//   const [loading, setLoading] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .sendForm(
//         "gmail", // replace with your EmailJS service ID
//         "template_id", // replace with your template ID
//         form.current,
//         "jtidSjVaryTzJbFdz" // replace with your public key
//       )
//       .then(
//         (result) => {
//           setLoading(false);
//           form.current.reset();

//           // toast.current.clear(); // Optional: Clear previous messages
//           toast.current.show({
//             severity: "success",
//             summary: "Success",
//             detail: "Message sent successfully!",
//             life: 3000,
//           });
//         },
//         (err) => {
//           setLoading(false);
//           toast.current.show({
//             severity: "error",
//             summary: "Error",
//             detail: "Failed to send. Please try again.",
//             life: 4000,
//           });
//         }
//       );
//   };

//   return (
//     <section id="contact" className="contact section">
//       <div className="container section-title" data-aos="fade-up">
//         <h2>Contact</h2>
//       </div>

//       <div className="container" data-aos="fade-up" data-aos-delay="100">
//         <Toast ref={toast} />

//         <div className="row gy-4">
//           {/* Contact Info */}
//           <div className="col-lg-5">
//             <div className="info-wrap">
//               <div className="info-item d-flex" data-aos-delay="200">
//                 <i className="bi bi-geo-alt flex-shrink-0"></i>
//                 <div>
//                   <h3>Address</h3>
//                   <p>Madurai, Tamil Nadu</p>
//                 </div>
//               </div>

//               <div className="info-item d-flex" data-aos-delay="300">
//                 <i className="bi bi-telephone flex-shrink-0"></i>
//                 <div>
//                   <h3>Call Us</h3>
//                   <p>+91 98765 43210</p>
//                 </div>
//               </div>

//               <div className="info-item d-flex" data-aos-delay="400">
//                 <i className="bi bi-envelope flex-shrink-0"></i>
//                 <div>
//                   <h3>Email Us</h3>
//                   <p>vigneshbsc048@gmail.com</p>
//                 </div>
//               </div>

//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121017.21181816205!2d78.04042174433806!3d9.917826796761636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1751109856361!5m2!1sen!2sin"
//                 frameBorder="0"
//                 style={{ border: 0, width: "100%", height: "270px" }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Google Map"
//               ></iframe>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="col-lg-7">
//             <form
//               ref={form}
//               onSubmit={sendEmail}
//               className="php-email-form"
//               data-aos-delay="200"
//             >
//               <div className="row gy-4">
//                 <div className="col-md-6">
//                   <label htmlFor="username">Your Name</label>
//                   <input
//                     type="text"
//                     name="username"
//                     className="form-control"
//                     required
//                   />
//                 </div>

//                 <div className="col-md-6">
//                   <label htmlFor="emailid">Your Email</label>
//                   <input
//                     type="email"
//                     name="emailid"
//                     className="form-control"
//                     required
//                   />
//                 </div>

//                 <div className="col-md-12">
//                   <label htmlFor="phonenumber">Ph-number</label>
//                   <input
//                     type="number"
//                     name="phonenumber"
//                     className="form-control"
//                     required
//                   />
//                 </div>

//                 <div className="col-md-12">
//                   <label htmlFor="message">Message</label>
//                   <textarea
//                     name="message"
//                     rows="10"
//                     className="form-control"
//                     required
//                   ></textarea>
//                 </div>

//                 <div className="col-md-12 text-center">
//                   {loading && <div className="loading">Sending...</div>}
//                   <button type="submit" disabled={loading}>
//                     {loading ? "Sending..." : "Send Message"}
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

/////////// Ithuvum prime reacr use panni alert messge use pannathu tha..
////// but sucess message ella section kum show agum... because using ( toastRef ) for passing props

// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// const Contact = ({ toastRef }) => {
//   const form = useRef();
//   // const toast = useRef(null);

//   const [loading, setLoading] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .sendForm(
//         "gmail", // replace with your EmailJS service ID
//         "template_id", // replace with your template ID
//         form.current,
//         "jtidSjVaryTzJbFdz" // replace with your public key
//       )
//       .then(
//         (result) => {
//           setLoading(false);
//           form.current.reset();

//           // toast.current.clear(); // Optional: Clear previous messages
//           toastRef.current.show({
//             severity: "success",
//             summary: "Success",
//             detail: "Message sent successfully!",
//             life: 3000,
//           });
//         },
//         (err) => {
//           setLoading(false);
//           toastRef.current.show({
//             severity: "error",
//             summary: "Error",
//             detail: "Failed to send. Please try again.",
//             life: 4000,
//           });
//         }
//       );
//   };

//   return (
//     <section id="contact" className="contact section">
//       <div className="container section-title" data-aos="fade-up">
//         <h2>Contact</h2>
//       </div>

//       <div className="container" data-aos="fade-up" data-aos-delay="100">
//         {/* <Toast ref={toast} /> */}{" "}
//         {/*  Toast inga import panna contact section ku matum tha show agum... atha nala app.jsx la pottu props ( toastRef ) use panituken*/}
//         <div className="row gy-4">
//           {/* Contact Info */}
//           <div className="col-lg-5">
//             <div className="info-wrap">
//               <div className="info-item d-flex" data-aos-delay="200">
//                 <i className="bi bi-geo-alt flex-shrink-0"></i>
//                 <div>
//                   <h3>Address</h3>
//                   <p>Madurai, Tamil Nadu</p>
//                 </div>
//               </div>

//               <div className="info-item d-flex" data-aos-delay="300">
//                 <i className="bi bi-telephone flex-shrink-0"></i>
//                 <div>
//                   <h3>Call Us</h3>
//                   <p>+91 98765 43210</p>
//                 </div>
//               </div>

//               <div className="info-item d-flex" data-aos-delay="400">
//                 <i className="bi bi-envelope flex-shrink-0"></i>
//                 <div>
//                   <h3>Email Us</h3>
//                   <p>vigneshbsc048@gmail.com</p>
//                 </div>
//               </div>

//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121017.21181816205!2d78.04042174433806!3d9.917826796761636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1751109856361!5m2!1sen!2sin"
//                 frameBorder="0"
//                 style={{ border: 0, width: "100%", height: "270px" }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Google Map"
//               ></iframe>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="col-lg-7">
//             <form
//               ref={form}
//               onSubmit={sendEmail}
//               className="php-email-form"
//               data-aos-delay="200"
//             >
//               <div className="row gy-4">
//                 <div className="col-md-6">
//                   <label htmlFor="username">Your Name</label>
//                   <input
//                     type="text"
//                     name="username"
//                     className="form-control"
//                     required
//                   />
//                 </div>

//                 <div className="col-md-6">
//                   <label htmlFor="emailid">Your Email</label>
//                   <input
//                     type="email"
//                     name="emailid"
//                     className="form-control"
//                     required
//                   />
//                 </div>

//                 <div className="col-md-12">
//                   <label htmlFor="phonenumber">Ph-number</label>
//                   <input
//                     type="number"
//                     name="phonenumber"
//                     className="form-control"
//                     required
//                   />
//                 </div>

//                 <div className="col-md-12">
//                   <label htmlFor="message">Message</label>
//                   <textarea
//                     name="message"
//                     rows="10"
//                     className="form-control"
//                     required
//                   ></textarea>
//                 </div>

//                 <div className="col-md-12 text-center">
//                   {loading && <div className="loading">Sending...</div>}
//                   <button type="submit" disabled={loading}>
//                     {loading ? "Sending..." : "Send Message"}
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ toastRef }) => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    emailid: "",
    phonenumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Please enter your name.";
    }

    if (!formData.emailid.trim()) {
      newErrors.emailid = "Please enter your email.";
    }

    if (!formData.phonenumber.trim()) {
      newErrors.phonenumber = "Please enter your phone number.";
    } else if (!/^\d{10}$/.test(formData.phonenumber)) {
      newErrors.phonenumber = "Enter a 10-digit number.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error on input change
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    emailjs
      .sendForm("gmail", "template_id", form.current, "jtidSjVaryTzJbFdz")
      .then(
        () => {
          setLoading(false);
          form.current.reset();
          setFormData({
            username: "",
            emailid: "",
            phonenumber: "",
            message: "",
          });
          setErrors({});

          toastRef.current.show({
            severity: "success",
            summary: "Success",
            detail: "Message sent successfully!",
            life: 3000,
          });
        },
        () => {
          setLoading(false);
          toastRef.current.show({
            severity: "error",
            summary: "Error",
            detail: "Failed to send. Please try again.",
            life: 4000,
          });
        }
      );
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/* <Toast ref={toast} /> */}{" "}
        {/*  Toast inga import panna contact section ku matum tha show agum... atha nala app.jsx la pottu props ( toastRef ) use panituken*/}
        <div className="row gy-4">
          {/* Contact Info */}
          <div className="col-lg-5">
            <div className="info-wrap">
              <div className="info-item d-flex" data-aos-delay="200">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Madurai, Tamil Nadu</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos-delay="300">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+91 78717 64866</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos-delay="400">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>vigneshbsc048@gmail.com</p>
                </div>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121017.21181816205!2d78.04042174433806!3d9.917826796761636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1751109856361!5m2!1sen!2sin"
                frameBorder="0"
                style={{ border: 0, width: "100%", height: "270px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="php-email-form"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="username">Your Name</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                  {errors.username && (
                    <small style={{ color: "red" }}>{errors.username}</small>
                  )}
                </div>

                <div className="col-md-6">
                  <label htmlFor="emailid">Your Email</label>
                  <input
                    type="email"
                    name="emailid"
                    className="form-control"
                    value={formData.emailid}
                    onChange={handleInputChange}
                  />
                  {errors.emailid && (
                    <small style={{ color: "red" }}>{errors.emailid}</small>
                  )}
                </div>

                <div className="col-md-12">
                  <label htmlFor="phonenumber">Ph-number</label>
                  <input
                    type="text"
                    name="phonenumber"
                    className="form-control"
                    value={formData.phonenumber}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
                      if (value.length <= 10) {
                        setFormData((prev) => ({
                          ...prev,
                          phonenumber: value,
                        }));
                        setErrors((prev) => ({
                          ...prev,
                          phonenumber: "",
                        }));
                      }
                    }}
                  />
                  {errors.phonenumber && (
                    <small style={{ color: "red" }}>{errors.phonenumber}</small>
                  )}
                </div>

                <div className="col-md-12">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    rows="10"
                    className="form-control"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  {errors.message && (
                    <small style={{ color: "red" }}>{errors.message}</small>
                  )}
                </div>

                <div className="col-md-12 text-center">
                  {loading && <div className="loading">Sending...</div>}
                  <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
