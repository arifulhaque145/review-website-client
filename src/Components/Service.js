import React from "react";
import { ServiceCard } from "../styles";
// import imgs from '../Images/engs/eng-1.jpg'

function Service({ data }) {
  const { name, cost, desc, img } = data;

  return (
    <ServiceCard className="p-6 m-8 bg-white shadow-lg rounded-lg">
      <img src={img} alt="" width="380" className="h-1/3" />
      <h2 className="font-bold text-2xl pt-6">${cost} / Mon</h2>
      <h3 className="text-xl py-4 italic light">{name}</h3>
      <p className="text-justify my-4">{desc}</p>
      <button className="px-4 py-2 mt-8 border-purple-800 hover:bg-purple-800 hover:text-white border-2 rounded-sm">
        Enroll Now
      </button>
    </ServiceCard>
  );
}

export default Service;
