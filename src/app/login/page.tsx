"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import PocketBase, { RecordAuthResponse } from "pocketbase";
import { motion, AnimatePresence } from "framer-motion";

const pb = new PocketBase("http://127.0.0.1:8090");

interface FormData {
  username: string;
  password: string;
}

export default function LoginComponent() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const authData = (await pb
        .collection("users")
        .authWithPassword(
          formData.username,
          formData.password
        )) as RecordAuthResponse;

      // Get user ID from authData
      const userId = authData.record.id; // Change from user to record
      console.log("User ID:", userId);

      // Redirect to dashboard after successful login
      router.push("/dashboard");
    } catch (error) {
      console.error("Authentication error:", error);
      setErrorMessage("Authentication failed. Please check your credentials.");
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
            key={1}
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
            {errorMessage && (
              <div className="mb-4 text-red-500 text-center">
                {errorMessage}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
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
              <motion.div variants={formElementVariants} custom={3}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-2 md:py-3 px-4 md:px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold transition duration-300 hover:bg-indigo-600 shadow-md"
                >
                  Login
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
