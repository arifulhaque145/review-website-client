import React from "react";
import Service from "./Service";

const sectionData = [
  {
    id: 1,
    name: "English Basic",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum labore officiis nisi vel laboriosam ducimus.",
    catagory: "English",
    cost: 200,
    img: "https://www.englishcollege.com/sites/default/files/field/image/best_english_courses_0.jpg",
  },
  {
    id: 2,
    name: "Spanish Intermediate",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum labore officiis nisi vel laboriosam ducimus.",
    catagory: "Spanish",
    cost: 250,
    img: "https://d1bvpoagx8hqbg.cloudfront.net/originals/tips-learn-spanish-eca8836418e67f6a4cab9d9ef833a43c.jpg",
  },
  {
    id: 3,
    name: "Turkish Intermediate",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum labore officiis nisi vel laboriosam ducimus.",
    catagory: "Turkish",
    cost: 150,
    img: "https://museatlife.files.wordpress.com/2019/03/1111-1.jpg",
  },
];

function ServiceSection() {
  return (
    <div className="bg-gray-100">
      <h1 className="text-4xl uppercase text-center p-12 font-medium tracking-wide">
        Our Services
      </h1>
      <div className="grid grid-cols-3">
        {sectionData.map((item) => (
          <Service key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ServiceSection;
