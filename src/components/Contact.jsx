// pages/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen bg-blue-300 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-4 py-12"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-center text-base md:text-lg mb-10">
          Have questions or feedback? We'd love to hear from you!
        </p>

        <form
          className="bg-blue-200 dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-md space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              
              placeholder="Enter your name"
              className="w-full p-3 shadow-black rounded-xl bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              placeholder="Write your message..."
              rows="5"
              className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-900 text-black py-3 rounded-xl font-medium transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
