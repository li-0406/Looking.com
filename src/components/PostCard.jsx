import React from "react";

const PostCard = ({ item }) => {
  return (
    <div className="flex gap-4 mt-4">
      {item.map((i, index) => (
        <div className="w-full relative">
          <img
            src={i.url}
            alt=""
            className="object-cover w-full h-[300px] rounded-xl"
          />
          <span className="absolute top-5 left-3 text-gray-300 text-2xl font-semibold">
            {i.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
