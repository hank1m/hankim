import React from "react";
import { motion } from "framer-motion";

export default function Contacts() {
  return (
    <motion.div
      className="relative font-sans px-6 py-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Центр: изображение */}
      <motion.div
        className="flex-shrink-0 w-full lg:w-[50%]"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <img
          src="/media/avatar.jpg"
          alt="Visual Work"
          className="w-full object-cover rounded-xl shadow-xl max-h-[600px]"
        />
      </motion.div>

      {/* Справа: текст и контакты */}
      <motion.div
        className="flex-1 text-right"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
      >
        <div className="text-xl leading-relaxed text-gray-900 dark:text-gray-100 space-y-6 max-w-xl ml-auto">
          <p className="text-2xl md:text-3xl font-light leading-snug">
            My work explores perception, memory, and presence through carefully constructed visual narratives.  
            I’m interested in how stillness and subtle motion shape the emotional experience of imagery.
          </p>

          <div className="space-y-3 pt-2">
            <p>
              <span className="font-semibold"></span>{" "}
              <a
                href="mailto:your@email.com"
                className="underline underline-offset-4 hover:text-yellow-400 transition"
              >
                hankims@proton.me
              </a>
            </p>

            <p>
              <span className="font-semibold"></span>{" "}
              <a
                href="https://instagram.com/hankimstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-yellow-400 transition"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
