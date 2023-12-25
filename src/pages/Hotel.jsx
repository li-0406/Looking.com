import React, { useRef } from "react";
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
  const list = ["資訊&房價", "設施", "訂房須知", "房客評價"];

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
      ease: "power3.inOut", //拉出來跟css並行
    });
  };

  return (
    <div>
      {/* 點擊照片 */}
      <div className="fixed w-full h-screen z-50 bg-black/80 flex justify-center items-center">
        <div className=" container max-w-screen-lg">
          <div className="bg-slate-400 flex justify-between p-3">
            <h1 className="text-2xl">Sunrise Hotel</h1>
            <span className="text-xl">
              關閉 <FontAwesomeIcon icon={faXmark} className="text-xl" />
            </span>
          </div>
          <div className="flex items-center justify-between bg-white p-5">
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="text-4xl cursor-pointer"
            />
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/499880743.jpg?k=d507e0ffc8f85a851dc587c88eb05489961567e79f853c67e4d78949208c64f9&o=&hp=1"
              alt=""
              className="w-[70%] rounded-xl"
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-4xl cursor-pointer"
            />
          </div>
        </div>
      </div>
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
          <div className="col-span-3 row-span-3">
            <img
              onMouseEnter={(e) => handleHover(e)}
              onMouseOut={(e) => handleHoverExit(e)}
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/499880743.jpg?k=d507e0ffc8f85a851dc587c88eb05489961567e79f853c67e4d78949208c64f9&o=&hp=1"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/499880743.jpg?k=d507e0ffc8f85a851dc587c88eb05489961567e79f853c67e4d78949208c64f9&o=&hp=1"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/499880743.jpg?k=d507e0ffc8f85a851dc587c88eb05489961567e79f853c67e4d78949208c64f9&o=&hp=1"
              alt=""
              className="object-fill"
            />
          </div>
          <div>
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/499880743.jpg?k=d507e0ffc8f85a851dc587c88eb05489961567e79f853c67e4d78949208c64f9&o=&hp=1"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/499880743.jpg?k=d507e0ffc8f85a851dc587c88eb05489961567e79f853c67e4d78949208c64f9&o=&hp=1"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/499880743.jpg?k=d507e0ffc8f85a851dc587c88eb05489961567e79f853c67e4d78949208c64f9&o=&hp=1"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/499880743.jpg?k=d507e0ffc8f85a851dc587c88eb05489961567e79f853c67e4d78949208c64f9&o=&hp=1"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/499880743.jpg?k=d507e0ffc8f85a851dc587c88eb05489961567e79f853c67e4d78949208c64f9&o=&hp=1"
              alt=""
            />
          </div>
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
