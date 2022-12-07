import React, { useRef } from "react";
import "./contact.css";
import { FaFacebook, FaGit, FaInstagram, FaLinkedin } from "react-icons/fa";
import Typical from "react-typical";
import emailjs from "@emailjs/browser";
import {toast} from 'react-toastify'

const Contact = () => {
  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
   
    console.log(form.current);
    emailjs.sendForm('service_xs00hsu', 'template_iuxrwyc', form.current, 'sAQWfWVkcmVtyhJvp')
      .then((result) => {
          console.log(result.text);
          toast.success('Thank you for contacting Danussh');
      }, (error) => {
          console.log(error.text);
          toast.error('Your message not sent. Try again.');
      });
    
  };
  return (
    <div className="contact-container" id = "contact"  >
      <div className="about-me-text">
        <div className="contact-me-container" data-aos="fade-up">Contact Me</div>
      </div>
      <div className="form"  data-aos="fade-up">
        <div className="contact-info" >
          <h3 className="title"    data-aos="fade-up">
            <Typical
              className="title"
              loop={Infinity}
              steps={["Lets get in touch", 1000]}
            ></Typical>
          </h3>

          <div className="social-media"   data-aos="fade-up">
            <p>Connect with me :</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/danussh.arvind">
                <FaFacebook></FaFacebook>
              </a>
              <a href="https://www.instagram.com/danussharvind/">
                <FaInstagram></FaInstagram>
              </a>
              <a href="https://www.linkedin.com/in/danussh-arvind-b-r-3aa861192">
                <FaLinkedin></FaLinkedin>
              </a>
              <a href="https://github.com/Danussh1998">
                <FaGit></FaGit>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form ref={form} autoComplete="off" onSubmit={onSubmit}>
            <h3 className="title">Contact Me</h3>

            <div className="input-container"   data-aos="fade-up">
              <input
                type="text"
                name="user_name"
                className="input"
                required="required"
              />
              <span>Username</span>
            </div>

            <div className="input-container"   data-aos="fade-up">
              <input
                type="text"
                name="user_email"
                className="input"
                required="required"
              />
              <span>Email</span>
            </div>

            <div className="input-container textarea"   data-aos="fade-up">
              <textarea
                name="message"
                className="input"
                required="required"
              ></textarea>
              <span>Message</span>
            </div>

            <input type="submit" value="Send" className="btn-send"   data-aos="fade-up"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
