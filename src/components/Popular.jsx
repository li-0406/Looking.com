import React from "react";
import useFetch from "../hooks/useFetch";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

const Feature = () => {
  const { data, loading, error } = useFetch("/hotels?popularHotel=true"); //所有飯店

  return (
    <div className="flex gap-4">
      {loading ? (
        data.map((i) => (
          <div className="cursor-pointer w-full">
            <Skeleton key={i._id} />
          </div>
        ))
      ) : (
        <>
          {data.map((item) => (
            <Link to={`/hotel/${item._id}`}>
              <div key={item._id} className="cursor-pointer w-full">
                <img
                  src={item.photos[0]}
                  className="rounded-xl mb-2 w-full"
                  alt=""
                />

                <div className="flex flex-col">
                  <span className="text-gray-300 font-semibold text-xl">
                    {item.name}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {item.rooms.length}間民宿
                  </span>
                  <div>
                    <span className="text-gray-400  block  mb-1">
                      {item.address}
                    </span>
                    <p>
                      <span className="bg-slate-600 p-1  rounded text-gray-200 text-sm">
                        {item.rating}
                      </span>
                      <span className="text-gray-200 ml-2 text-sm">
                        {item.rating > 9.0 ? "好極了" : "很棒"}
                      </span>
                    </p>
                    <p className="text-right text-gray-200 font-semibold text-xl mt-8">
                      <span className="text-gray-400  inline-block align-text-top mr-1 font-medium">
                        起價
                      </span>
                      TWD {item.cheapestPrice.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default Feature;
