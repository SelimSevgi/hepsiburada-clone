import React from "react";
import { MdOutlineIosShare } from "react-icons/md";
export default function Carausel() {
  return (
    <div className="w-full h-[540px] bg-orange-400 flex flex-col items-center">
      <div className="mt-3 w-[80%] flex justify-center items-center ">
        <span className="text-white font-bold text-[17px] mr-8 cursor-pointer transition ease-in-out delay-100  focus:bg-white focus:text-black focus:border-[1px] focus:rounded-[150px] focus:p-2">
          Sana Özel
        </span>
        <span className="text-white font-bold text-[17px] mr-8 cursor-pointer transition ease-in-out delay-100  focus:bg-white focus:text-black focus:border-[1px] focus:rounded-[150px] focus:p-2">
          Bugüne Özel
        </span>
        <span className="text-white font-bold text-[17px] mr-8 cursor-pointer transition ease-in-out delay-100  focus:bg-white focus:text-black focus:border-[1px] focus:rounded-[150px] focus:p-2">
          Ramazan Alışverişi
        </span>
        <span className="text-white font-bold text-[17px] mr-8 cursor-pointer transition ease-in-out delay-100  focus:bg-white focus:text-black focus:border-[1px] focus:rounded-[150px] focus:p-2">
          Kampanyalar
        </span>
        <span className="text-white font-bold text-[17px] mr-8 cursor-pointer transition ease-in-out delay-100  focus:bg-white focus:text-black focus:border-[1px] focus:rounded-[150px] focus:p-2">
          Kaçırılmayacak Fırsatlar
        </span>
        <span className="text-white font-bold text-[17px] mr-8 cursor-pointer transition ease-in-out delay-100  focus:bg-white focus:text-black focus:border-[1px] focus:rounded-[150px] focus:p-2">
          Ayrıcalıklar
        </span>
      </div>
      <div className=" w-[1088px] flex flex-row items-center justify-between bg-white rounded-[10px] mt-4">
        <div className="w-[408px] h-[386px]  flex items-center justify-center relative">
          <MdOutlineIosShare className="w-[40px] h-[40px] p-2 absolute top-0 right-0 text-gray-500 mr-[10px] mt-[30px] font-light transition ease-in-out delay-2000 hover:bg-slate-300 hover:rounded-full  " />
          <div className="flex ml-[10px] flex-col items-center justify-center ">
            <span className="font-semibold text-[32px] tracking-[.34px] ">
              Hediyeler, fırsatlar
            </span>
            <span>ve çok daha fazlasını keşfet</span>
            <a href="https://sanaozel.hepsiburada.com/">Hemen incele</a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="w-[672px] h-[378px] rounded-[10px] mr-1  "
            src="https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2127_20220318172750.png/format:webp"
            alt=""
          ></img>
        </div>
      </div>
      <div>altdasda</div>
    </div>
  );
}
