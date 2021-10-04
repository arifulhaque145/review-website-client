import React from "react";
import { ServiceCard } from "../styles";
// import imgs from '../Images/engs/eng-1.jpg'

function Service({ data }) {
  const { name, cost, desc, img } = data;
  
  return (
    <ServiceCard>
      <img src={img} alt="" width="380" height="200" />
      <h2>${cost} / Mon</h2>
      <h4>{name}</h4>
      <p>{desc}</p>
      <p>Cost/Mon</p>
      <button>Enroll Now</button>
    </ServiceCard>
  );
}

export default Service;
