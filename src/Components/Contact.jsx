import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '../constants';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="border-b border-neutral-800 px-4 py-20  text-white">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-bold mb-10"
      >
        Get in <span className="text-purple-400">Touch</span>
      </motion.h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-lg">
        {/* Contact Info Left Side */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.2 }}
          className="space-y-6"
        >
          {/* Address */}
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-2xl text-purple-400 mt-1" />
            <p>{CONTACT.address}</p>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-2xl text-purple-400 mt-1" />
            <p className="hover:text-purple-300 cursor-pointer transition">{CONTACT.phoneNo}</p>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-2xl text-purple-400 mt-1" />
            <a
              href={`mailto:${CONTACT.email}`}
              className="hover:underline hover:text-purple-300 transition"
            >
              {CONTACT.email}
            </a>
          </div>
        </motion.div>

        {/* Optional Right Side Visual */}
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.3 }}
          className="bg-neutral-800 p-6 rounded-2xl shadow-lg text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
          <p className="text-neutral-400 mb-4">
            Feel free to reach out via email or phone. I'm open to collaboration,
            freelance, or full-time opportunities.
          </p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-block mt-4 px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

