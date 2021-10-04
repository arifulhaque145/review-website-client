import React from "react";

const users = [
  {
    id: 1,
    name: "John Lee",
    post: "CEO",
    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sed ad suscipit. Aperiam, iusto officiis!",
    img: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg",
  },
  {
    id: 2,
    name: "John Lee",
    post: "CEO",
    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sed ad suscipit. Aperiam, iusto officiis!",
    img: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg",
  },
  {
    id: 3,
    name: "John Lee",
    post: "CEO",
    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sed ad suscipit. Aperiam, iusto officiis!",
    img: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg",
  },
  {
    id: 4,
    name: "John Lee",
    post: "CEO",
    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sed ad suscipit. Aperiam, iusto officiis!",
    img: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg",
  },
];

function Feedback() {
  return (
    <div className="flex">
      {users.map((item) => (
        <div className="p-6 m-6 bg-red-200 flex flex-col items-center rounded-lg">
          <img
            src={users[0].img}
            alt=""
            className="rounded-full rounded-full h-24 w-24"
          />
          <h1 className="font-bold text-2xl mt-6">{users[0].name}</h1>
          <h3>{users[0].post}</h3>
          <p className="my-6 text-center">{users[0].comments}</p>
        </div>
      ))}
    </div>
  );
}

export default Feedback;
