import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiStockLine } from "react-icons/ri";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(location.pathname.split("/")[1]);
  const links = [
    {
      title: "訂房管理後台",
      links: [
        {
          name: "orderslist",
          labelname: "訂房訂單",
          icon: <AiOutlineShoppingCart />,
        },
        {
          name: "hotelslist",
          labelname: "飯店列表",
          icon: <AiOutlineShoppingCart />,
        },
        {
          name: "roomslist",
          labelname: "房型列表",
          icon: <IoMdContacts />,
        },
        {
          name: "userslist",
          labelname: "顧客列表",
          icon: <RiContactsLine />,
        },
      ],
    },
    {
      title: "管理員專區",
      links: [
        {
          name: "hotel",
          labelname: "飯店管理",
          icon: <AiOutlineShoppingCart />,
        },
        {
          name: "room",
          labelname: "房型管理",
          icon: <IoMdContacts />,
        },
        {
          name: "user",
          labelname: "顧客管理",
          icon: <RiContactsLine />,
        },
        {
          name: "auth",
          labelname: "管理員管理",
          icon: <RiContactsLine />,
        },
      ],
    },
  ];
  console.log(active);
  const toList = (item) => {
    console.log(123);
  };

  return (
    <div className="w-72 fixed sidebar bg-white ">
      <div className="mt-10 ">
        {links.map((item) => (
          <div key={item.title}>
            <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
              {item.title}
            </p>
            {item.links.map((link) => (
              <Link
                to={`/${link.name}`}
                key={link.name}
                className={`${
                  "flex items-center gap-5 p-3 rounded-lg text-md text-gray-700 hover:bg-blue-600 hover:text-white m-2 " +
                  (link.name === active ? "bg-blue-600 text-white" : "")
                }`}
              >
                {link.icon}
                {link.labelname}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
