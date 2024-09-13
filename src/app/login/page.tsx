"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  username: string;
  password: string;
  name: string;
  roll: string;
  sec: string;
  studentClass: string;
  stage: string;
}

export default function Component() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
    name: "",
    roll: "",
    sec: "",
    studentClass: "1",
    stage: "Playground",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      console.log("Form submitted:", formData);
    }
  };

  const inputClasses =
    "w-full px-3 py-2 sm:px-4 sm:py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 ease-in-out shadow-sm";
  const labelClasses = "block text-xs font-medium text-gray-400 mb-2";

  const containerVariants = {
    hidden: { borderRadius: "16px", width: 0, height: 0 },
    visible: {
      borderRadius: "16px",
      width: "100%",
      height: "auto",
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const formElementVariants = {
    hidden: (i: number) => ({ x: i % 2 === 0 ? -30 : 30, opacity: 0 }),
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.4,
        type: "spring",
        stiffness: 120,
      },
    }),
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-700 to-gray-900 overflow-hidden p-4 sm:p-6 md:p-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-gray-900 p-6 sm:p-8 md:p-10 shadow-2xl rounded-lg w-full max-w-lg sm:max-w-xl"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              variants={formElementVariants}
              custom={0}
              className="text-2xl sm:text-3xl font-extrabold mb-6 text-center text-white"
            >
              School Login
            </motion.h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              {step === 1 ? (
                <>
                  <motion.div variants={formElementVariants} custom={1}>
                    <label htmlFor="username" className={labelClasses}>
                      Username or Email
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="Enter your username or email"
                    />
                  </motion.div>
                  <motion.div variants={formElementVariants} custom={2}>
                    <label htmlFor="password" className={labelClasses}>
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="Enter your password"
                    />
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div variants={formElementVariants} custom={1}>
                    <label htmlFor="name" className={labelClasses}>
                      Student&apos;s Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="Enter student's name"
                    />
                  </motion.div>
                  <motion.div variants={formElementVariants} custom={2}>
                    <label htmlFor="roll" className={labelClasses}>
                      Roll Number
                    </label>
                    <input
                      type="text"
                      id="roll"
                      name="roll"
                      value={formData.roll}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="Enter roll number"
                    />
                  </motion.div>
                  <motion.div variants={formElementVariants} custom={3}>
                    <label htmlFor="sec" className={labelClasses}>
                      Section
                    </label>
                    <input
                      type="text"
                      id="sec"
                      name="sec"
                      value={formData.sec}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="Enter section"
                    />
                  </motion.div>
                  <motion.div variants={formElementVariants} custom={4}>
                    <label htmlFor="studentClass" className={labelClasses}>
                      Class
                    </label>
                    <select
                      id="studentClass"
                      name="studentClass"
                      value={formData.studentClass}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    >
                      {[
                        "Playground",
                        "Lower KG",
                        "Upper KG",
                        "1",
                        "2",
                        "3",
                        "4",
                      ].map((cls) => (
                        <option key={cls} value={cls}>
                          {cls}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                </>
              )}
              <motion.div
                variants={formElementVariants}
                custom={step === 1 ? 5 : 6}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-2 md:py-3 px-4 md:px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold transition duration-300 hover:bg-indigo-600 shadow-md"
                >
                  {step === 1 ? "Next" : "Login"}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

        body {
          font-family: "Inter", sans-serif;
          background-color: black;
          color: white;
        }
      `}</style>
    </div>
  );
}
