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
    name: "Neil Johnson",
    post: "Software Engineer",
    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sed ad suscipit. Aperiam, iusto officiis!",
    img: "https://thumbs.dreamstime.com/b/close-up-head-shot-confident-young-man-studio-portrait-close-up-head-shot-confident-serious-concentrated-young-man-looking-170081471.jpg",
  },
  {
    id: 3,
    name: "Gray Morgan",
    post: "Programmer",
    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sed ad suscipit. Aperiam, iusto officiis!",
    img: "https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg",
  },
  {
    id: 4,
    name: "Aurther Chapman",
    post: "Web Developer",
    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sed ad suscipit. Aperiam, iusto officiis!",
    img: "https://st3.depositphotos.com/9881890/16378/i/600/depositphotos_163786426-stock-photo-handsome-cheerful-man.jpg",
  },
];

function Feedback() {
  return (
    <div className="flex">
      {users.map((item) => (
        <div className="p-6 m-6 bg-gray-50 flex flex-col items-center rounded-lg shadow-lg">
          <img
            src={item.img}
            alt=""
            className="rounded-full rounded-full h-24 w-24"
          />
          <h1 className="font-bold text-2xl mt-6">{item.name}</h1>
          <h3>{item.post}</h3>
          <p className="my-6 text-center italic">{item.comments}</p>
        </div>
      ))}
    </div>
  );
}

export default Feedback;
