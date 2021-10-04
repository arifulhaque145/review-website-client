import React, { useEffect, useState } from "react";
import { ServiceCards, ServiceContainer } from "../styles";
import Service from "./Service";

function Services() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);

  const engData = data.filter((item) => item.catagory === "English");
  const spnData = data.filter((item) => item.catagory === "Spanish");
  const turData = data.filter((item) => item.catagory === "Turkish");

  return (
    <ServiceContainer>
      <h1>English Courses</h1>
      <br />
      <ServiceCards>
        {engData.map((item) => (
          <Service key={item.id} data={item} />
        ))}
      </ServiceCards>
      <h1>Spanish Courses</h1>
      <br />
      <ServiceCards>
        {spnData.map((item) => (
          <Service key={item.id} data={item} />
        ))}
      </ServiceCards>
      <h1>Turkish Courses</h1>
      <br />
      <ServiceCards>
        {turData.map((item) => (
          <Service key={item.id} data={item} />
        ))}
      </ServiceCards>
    </ServiceContainer>
  );
}

export default Services;
