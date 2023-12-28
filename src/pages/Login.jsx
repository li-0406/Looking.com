import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const login = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <div className="container max-w-[15%]">
          <h1 className="text-2xl font-bold">登入</h1>
          <input
            v-model="datamsg.username"
            type="text"
            placeholder="帳號"
            class="mt-8 block w-full p-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
          <input
            v-model="datamsg.password"
            type="password"
            placeholder="密碼"
            class="my-5 block w-full p-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />

          <div class="mt-3">
            <div class="w-full text-center bg-slate-500 hover:bg-slate-600 font-bold text-xl rounded-md p-4 cursor-pointer select-none">
              登入
            </div>
          </div>
          <Link to="/register">
            <p className="hover:underline mt-5">註冊 & 創建一個帳號</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default login;
