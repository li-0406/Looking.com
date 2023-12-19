import React from "react";

const Feature = ({ dataArray }) => {
  return (
    <div className="flex gap-4">
      {dataArray.map((item) => (
        <div key={item.name} className="cursor-pointer w-full">
          <img src={item.url} className="rounded-xl mb-2 w-full" alt="" />
          <div className="flex flex-col">
            <span className="text-gray-300 font-semibold text-xl">
              {item.name}
            </span>
            {item.sum && (
              <span className="text-gray-400 text-sm">{item.sum}間民宿</span>
            )}
            {item.area && (
              <div>
                <span className="text-gray-400  block  mb-1">{item.area}</span>
                <p>
                  <span className="bg-slate-600 p-1  rounded text-gray-200 text-sm">
                    {item.value}
                  </span>
                  <span className="text-gray-200 ml-2 text-sm">
                    {item.value > 9.0 ? "好極了" : "很棒"}
                  </span>
                </p>
                <p className="text-right text-gray-200 font-semibold text-xl mt-8">
                  <span className="text-gray-400  inline-block align-text-top mr-1 font-medium">
                    起價
                  </span>
                  TWD {item.price.toLocaleString()}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature;
