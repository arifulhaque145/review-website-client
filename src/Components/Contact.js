import React from 'react'

function Contact() {
    return (
      <div className="w-3/4 mx-auto p-4">
        <input
          type="text"
          placeholder="Your Email"
          className="bg-white w-full p-4 mb-2 rounded-lg shadow-lg"
        />
        <input
          type="text"
          placeholder="Your Email"
          className="bg-white w-full p-4 mb-2 rounded-lg shadow-lg"
        />
        <textarea
          className="bg-white w-full p-4 mb-2 rounded-lg shadow-lg"
          rows="6"
          cols="50"
          placeholder="Your text here"
        ></textarea>
        <input
          className="text-white bg-purple-800 hover:bg-gray-300 hover:text-black w-1/4 p-2 mb-2 rounded-sm shadow-lg"
          type="submit"
          value="Submit"
        />
      </div>
    );
}

export default Contact
