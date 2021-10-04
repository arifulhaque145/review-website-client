import React from 'react'

function Footer() {
    return (
      <div className="bg-black p-4">
        <h2 className="text-white text-center">
          lexicon website @ copywrite 2021
        </h2>
        <div className="flex justify-center py-4">
          <i className="text-white px-2 text-xl fab fa-facebook-square"></i>
          <i className="text-white px-2 text-xl fab fa-youtube"></i>
          <i className="text-white px-2 text-xl fab fa-twitter"></i>
          <i className="text-white px-2 text-xl fab fa-instagram-square"></i>
        </div>
      </div>
    );
}

export default Footer
