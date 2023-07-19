import React, { useRef, useState } from "react";
import { MdEmail, MdLocationPin } from "react-icons/md";
import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoFacebook,
  BiLogoMessenger,
} from "react-icons/bi";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
    const [disabled, setDisabled] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setDisabled(true)

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire("Success!", "Message sent successfully", "success");
          e.target.reset();
          setDisabled(false)
        },
        (error) => {
          Swal.fire("Failed!", error.text, "error");
          setDisabled(false)
        }
      );
  };
  return (
    <section className="bg-[#1E4B40]" id="contact">
      <div className="container mx-auto p-5 py-20">
        <div>
          <h2 className="font-source-pro text-4xl font-bold uppercase text-white text-center">
            Get In Touch
          </h2>
          <p className="text-white text-center mt-3">
            Want to learn more? Feel free to message me directly!
          </p>
        </div>
        <div>
          <form onSubmit={sendEmail} ref={form} className="max-w-lg mx-auto border border-primary mt-5 p-5 rounded-md space-y-3">
            <div className="flex flex-col">
              <label className="text-white text-sm mb-1" htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                name="from_name"
                className="px-5 py-3 outline-none rounded-md"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white text-sm mb-1" htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                name="from_email"
                className="px-5 py-3 outline-none rounded-md"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white text-sm mb-1" htmlFor="message">Your message</label>
              <textarea
                placeholder="Enter your message"
                id="message"
                name="message"
                className="px-5 py-3 outline-none rounded-md"
                rows={10}
                required
              ></textarea>
            </div>
            <button type="submit" disabled={disabled} className='inline-block border-primary border-2 px-5 py-3 rounded-md bg-slate-900 bg-opacity-90 text-white font-semibold font-source-pro uppercase w-full'>Send Message</button>
          </form>
        </div>
        <div className="flex flex-col items-center mt-5">
          <p className="flex text-white items-center gap-2">
            <MdEmail size={30} /> <span>murshedmargub@gmail.com</span>
          </p>
          <p className="flex text-white items-center gap-2">
            <MdLocationPin size={30} /> <span>Dhaka, Bangladesh</span>
          </p>
          <div className="flex justify-center items-center gap-3 mt-5">
            <a href="https://www.linkedin.com/in/margubmurshed/" target="_blank" rel="noopener noreferrer">
              <BiLogoLinkedin
                size={40}
                className="p-2 bg-white text-gray-800 rounded-full shadow-md"
              />
            </a>
            <a href="https://github.com/margubmurshed" target="_blank" rel="noopener noreferrer">
              <BiLogoGithub
                size={40}
                className="p-2 bg-white text-gray-800 rounded-full shadow-md"
              />
            </a>
            <a href="facebook.com/margub32" target="_blank" rel="noopener noreferrer">
              <BiLogoFacebook
                size={40}
                className="p-2 bg-white text-gray-800 rounded-full shadow-md"
              />
            </a>
            <a href="https://m.me/margub32/" target="_blank" rel="noopener noreferrer">
              <BiLogoMessenger
                size={40}
                className="p-2 bg-white text-gray-800 rounded-full shadow-md"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
