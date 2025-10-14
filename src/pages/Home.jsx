import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // 👈 Import animation

const Home = () => {
  const navigate = useNavigate();

  const handleStartBlog = () => {
    navigate("/bloglist");
  };

  return (
    <div className="bg-[#111] min-h-screen text-white flex flex-col items-center justify-center px-6 md:px-12 py-12 text-center w-full">

      {/* Hero Section */}
      <div className="max-w-3xl text-center mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif mb-6">Blog with the best</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          More bloggers and independent creators choose WordPress than any other blogging tool.
          Tap into intuitive, flexible tools that put writers, bloggers, and creators first.
        </p>
        <button
          onClick={handleStartBlog}
          className="bg-white text-black font-medium px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-200"
        >
          Start a blog
        </button>
        <p className="text-gray-400 mt-4 text-sm">
          Get your free account now—just an email needed.
        </p>
      </div>

      {/* Image Section with Animation */}
      <div className="mt-12 flex justify-center w-full">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className="bg-[#f5e9da] rounded-2xl shadow-lg overflow-hidden w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%] flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Blog preview"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
