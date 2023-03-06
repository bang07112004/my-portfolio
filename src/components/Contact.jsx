import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_1toty5u",
        "template_wykzam8",
        {
          from_name: form.name,
          to_name: "Bang",
          from_email: form.email,
          to_email: "phong0909191145@gmail.com",
          message: form.message,
        },
        "V2Hbly7DQ5qbhpEGh"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] rounded-2xl bg-black-100 p-8"
      >
        <p className={styles.sectionSubText}>Get In touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          action=""
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="" className="flex flex-col ">
            <span className="font-md mb-4 text-white">Your Name</span>
            <input
              type="text"
              name="name"
              id=""
              value={form.name}
              onChange={handleChange}
              placeholder="What is your name?"
              className="rounded-lg border-none bg-tertiary py-4 px-6 font-medium text-white outline-none placeholder:text-secondary"
            />
          </label>
          <label htmlFor="" className="flex flex-col ">
            <span className="font-md mb-4 text-white">Your Email</span>
            <input
              type="email"
              name="email"
              id=""
              value={form.email}
              onChange={handleChange}
              placeholder="What is your email?"
              className="rounded-lg border-none bg-tertiary py-4 px-6 font-medium text-white outline-none placeholder:text-secondary"
            />
          </label>
          <label htmlFor="" className="flex flex-col ">
            <span className="font-md mb-4 text-white">Your Message</span>
            <textarea
              rows={7}
              name="message"
              id=""
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="rounded-lg border-none bg-tertiary py-4 px-6 font-medium text-white outline-none placeholder:text-secondary"
            />
          </label>
          <button
            type="submit"
            className="w-fit rounded-xl bg-tertiary py-3 px-8 font-bold text-white shadow-md shadow-primary outline-none"
          >
            {loading ? "Sending..." : "Sent"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[300px] md:h-[500px] xl:h-auto  xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
