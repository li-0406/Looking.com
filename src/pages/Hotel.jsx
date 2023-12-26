import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faTag,
  faBanSmoking,
  faWheelchair,
  faXmark,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  let comments = useRef(null);
  const [openSlider, setOpenSlider] = useState(false);
  const [sliderIndex, setSiderIndex] = useState(0);
  const list = ["資訊&房價", "設施", "訂房須知", "房客評價"];
  const fakeImg = [
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/499880743.jpg?k=d507e0ffc8f85a851dc587c88eb05489961567e79f853c67e4d78949208c64f9&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/499694493.jpg?k=54d4d8da798e3a5d1b66269dec3610c782aa263549325e6a95f3cb18713ae558&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/499694680.jpg?k=048b0b66ee6b16d365b020487b75003d00d900342ad6465e77bde4ab00202d3d&o=&hp=10",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/499694544.jpg?k=8032a0302aa24b7ca1eef7c6f765aa5784ff67a0aeb4258f3654b12bf99f927d&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/499881407.jpg?k=84520bd68c98508c64aed5e877b5446960c2bde5fbe52dbc2e6a197e5899670d&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/499882879.jpg?k=bfb116986ef8033ae5d062bf603858a19a3f4bc0a04cb31b49c56d028db6beb2&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/499700729.jpg?k=f5d0e975c92e033be4ae791cad1cb0c8e5b50097dbf8400a7086cffebb1ad0df&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/499879760.jpg?k=7531e64ae6b5a8e42f268b087c8f6d97bf7218981d410a18ad0ae64aedbfc783&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/landmark/max1024/199117.webp?k=1c6105f1e823ccbb197720bb652fba811202816a4a8c1b692531ec3ea545c83f&o=",
  ];
  const handleHover = (e) => {
    gsap.to(comments, {
      css: {
        display: "flex",
        opacity: 1,
      },
      ease: "power3.inOut",
    });
  };
  const handleHoverExit = (e) => {
    gsap.to(comments, {
      css: {
        display: "none",
        opacity: 0,
      },
      ease: "power3.inOut",
    });
  };

  const slideDirection = (direction) => {
    if (direction === "left") {
      sliderIndex === 0
        ? setSiderIndex(fakeImg.length - 1)
        : setSiderIndex(sliderIndex - 1);
    } else {
      sliderIndex === fakeImg.length - 1
        ? setSiderIndex(0)
        : setSiderIndex(sliderIndex + 1);
    }
  };

  return (
    <div>
      {/* 點擊照片 */}
      {openSlider && (
        <div className="fixed w-full h-screen z-50 bg-black/80 flex justify-center items-center">
          <div className=" container max-w-screen-lg ">
            <div className="bg-slate-300 flex justify-between p-3 rounded-t-xl">
              <h1 className="text-2xl">Sunrise Hotel</h1>
              <span
                className="text-xl cursor-pointer"
                onClick={() => setOpenSlider(false)}
              >
                關閉 <FontAwesomeIcon icon={faXmark} className="text-xl" />
              </span>
            </div>
            <div className="flex items-center justify-between bg-white p-5 rounded-b-xl ">
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="text-4xl cursor-pointer flex-1 select-none"
                onClick={() => slideDirection("left")}
              />
              <img
                src={fakeImg[sliderIndex]}
                alt=""
                className="w-[70%] rounded-xl select-none"
              />
              <FontAwesomeIcon
                icon={faAngleRight}
                className="text-4xl cursor-pointer flex-1 select-none"
                onClick={() => slideDirection("right")}
              />
            </div>
          </div>
        </div>
      )}
      <Navbar />

      <div className="container mx-auto max-w-screen-xl  pt-20">
        <div className="flex gap-2">
          {list.map((i) => {
            return <button className="bg-slate-300 p-4 rounded-xl">{i}</button>;
          })}
        </div>
        <div className="flex justify-between mt-8">
          <div>
            <h1 className="text-2xl font-semibold">Sunrise Hotel</h1>
            <p className="mt-2">
              <FontAwesomeIcon icon={faLocationDot} />
              台北信義區No. 8, Lane 71, Section 5, Zhongxiao East Road
            </p>
          </div>
          <div>
            <button className="bg-slate-500 p-3 rounded-xl block">
              現在就預定
            </button>
            <button className="py-3 mt-2">
              <FontAwesomeIcon icon={faTag} />
              買貴退差價
            </button>
          </div>
        </div>
        {/* 照片 */}
        <div className="grid grid-cols-4 gap-1 relative">
          <div
            className="absolute top-3 left-3 bg-black/30 p-3 rounded-lg opacity-0"
            ref={(el) => (comments = el)}
            onMouseEnter={(e) => handleHover(e)}
          >
            <div className="flex gap-3">
              <div className="bg-slate-300 flex items-center p-3 rounded-xl ml-2">
                <span className="text-xl">8.3</span>
              </div>
              <div>
                <p>非常好</p>
                <p className="text-gray-400">6992則評論</p>
              </div>
            </div>
          </div>
          {fakeImg.slice(0, 8).map((i, index) =>
            index >= 7 ? (
              <div
                className="relative cursor-pointer"
                onClick={() => {
                  setSiderIndex(index);
                  setOpenSlider(true);
                }}
              >
                <img src={i} alt="" className="h-full" />
                <div className="bg-black/50 flex justify-center items-center w-full h-full absolute top-[0px]">
                  <span className="text-2xl text-white">
                    {fakeImg.length} 張照片
                  </span>{" "}
                </div>
              </div>
            ) : (
              <div
                key={i}
                className={
                  index === 0
                    ? "col-span-3 row-span-3 cursor-pointer"
                    : "cursor-pointer"
                }
                onClick={() => {
                  setSiderIndex(index);
                  setOpenSlider(true);
                }}
              >
                <img
                  onMouseEnter={(e) => (index === 0 ? handleHover(e) : "")}
                  onMouseOut={(e) => (index === 0 ? handleHoverExit(e) : "")}
                  src={i}
                  alt=""
                  className="h-full"
                />
              </div>
            )
          )}
        </div>
        {/* 介紹 */}
        <div className="grid grid-cols-6 gap-5  pt-10">
          <div className="col-span-4 flex flex-col gap-5">
            <p>
              Wonderwall Ximending 位於台北，距離西門紅樓 500
              公尺，有觀光旅遊櫃台、全面禁菸客房、共用休息室、全館WiFi（免費）以及酒吧。這間住宿靠近多個著名的景點，距離华西街观光夜市
              1.3 公里，距離剝皮寮老街 1.3 公里，距離青山宮 1.2
              公里。住客可以在小吃吧享用飲品。
            </p>
            <p>
              Wonderwall Ximending
              的每間客房都有衣櫃。這間住宿的所有客房均有空調和書桌。
            </p>
            <p>24 小時櫃檯服務服務人員會講中文、英語、日語和韓語。</p>
            <p>
              Wonderwall Ximending
              附近的人氣景點包括捷運西門站、中華民國總統府和臺北市中山堂。最近的機場是台北松山機場，距離
              Wonderwall Ximending 6 公里。
            </p>
            <p>情侶特別喜歡這個位置－並給他們的雙人旅行住宿體驗 9.1 分</p>
          </div>
          <div className="col-span-2 bg-slate-300 flex flex-col gap-5 justify-between p-5">
            <h4 className="text-xl font-semibold">住宿特色</h4>
            <p>此飯店位於台北評分最高的地區，地理位置評分高達 9.2 分</p>
            <h4 className="text-2xl">TWD 6,240</h4>
            <button className="w-full p-3 bg-slate-500 rounded-lg">
              現在就預定
            </button>
          </div>
        </div>
        {/* 熱門設施 */}
        <div className="grid grid-cols-6 pt-10">
          <div className="col-span-4">
            <h4 className="text-xl font-semibold">熱門設施</h4>
            <div className="bg-gray-200 h-1 my-2"></div>
            <span>
              <FontAwesomeIcon icon={faBanSmoking} />
              禁菸客房
            </span>

            <span>
              <FontAwesomeIcon icon={faWheelchair} />
              無障礙設施
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
