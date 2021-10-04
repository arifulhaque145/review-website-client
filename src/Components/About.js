import React from 'react'
const url =
  "https://www.irishtimes.com/polopoly_fs/1.3094846.1496074905!/image/image.jpg_gen/derivatives/box_620_330/image.jpg";

function About() {
    return (
      <div className="flex">
        <img src={url} alt="" />
        <div className="ml-8">
          <h1 className="text-4xl uppercase tracking-widest">Who we are</h1>
          <p className="text-justify mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            maiores consequatur vero ex illo recusandae, amet dolorum? Aperiam
            velit odio nemo? Sit reprehenderit consectetur reiciendis. Atque
            dicta maxime quibusdam fugit, dolorum, nulla libero eum ducimus
            neque placeat vel corporis explicabo quisquam optio delectus beatae
            repellendus pariatur! Ut fugiat pariatur assumenda!
          </p>
          <p className="text-justify mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            maiores consequatur vero ex illo recusandae, amet dolorum? Aperiam
            velit odio nemo? Sit reprehenderit consectetur reiciendis. Atque
            dicta maxime quibusdam fugit, dolorum, nulla libero eum ducimus
            neque placeat vel corporis explicabo quisquam optio delectus beatae
            repellendus pariatur! Ut fugiat pariatur assumenda!
          </p>
        </div>
      </div>
    );
}

export default About
