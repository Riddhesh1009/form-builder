"use client"
import CustomForm from "@/components/MainArea/CustomForm";
import ToolBar from "@/components/SideBar/ToolBar";
import { useState } from "react";

export default function Home() {
  const [customForm,setCustomForm] = useState([]);

  return (
    <div className="h-full w-full lg:w-[87%] mx-auto bg-gray-50 flex justify-center items-start pt-[75px] md:pt-[100px] md:pb-10 md:gap-4">
      <div className="w-[77%] md:w-[70%] h-full bg-secondary/40 p-4 md:rounded-2xl">
        <CustomForm customForm={customForm} setCustomForm={setCustomForm}/>
      </div>
      <div className="w-[23%] md:w-[30%] h-full bg-gray-50 ">
        <ToolBar customForm={customForm} setCustomForm={setCustomForm}/>
      </div>
    </div>
  );
}
