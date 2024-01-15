import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/Job.module.css';
import { GoPersonAdd } from "react-icons/go";
import { BsBarChartLine } from "react-icons/bs";
import { LuBookUp, LuMessageSquare } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareYoutube } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
export default function Footer() {
  const router = useRouter();

  const [result, setResult] = useState();

  const onSubmit = () => {
    TutorialService.create({
      title: "title1",
      description: "description1"
    }).then(res => {
      console.log(res);
    })
  };

  return (
    <div className="w-full p-5 flex-col justify-start items-center gap-8 inline-flex">
      <div className="w-full h-[253px] px-8 py-12 bg-slate-200 rounded-2xl flex-col justify-start items-center gap-8 inline-flex">
        <div className=" h-[157px] flex-col justify-start items-start gap-8 inline-flex">
          <div className="w-[1400px] h-[108px] justify-start items-start gap-8 inline-flex">
            <div className="w-[254.40px] h-[108px] flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="w-[231px] h-[29px] justify-center items-center inline-flex">
                  <img className='w-[231px] h-[29px] relative' src='/logo.png' alt='Logo image' />
              </div>
              <div className="self-stretch grow shrink basis-0 text-blue-950 text-sm font-normal font-['Rubik']">
                Lorem ipsum dolor sit amet consectetur. 
                Lectus facilisi id bibendum quis consectetur egestas. </div>
            </div>
            <div className="w-[254.40px] h-[108px] flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="text-indigo-900 text-lg font-medium font-['Rubik']">Bussiness</div>
              <div className="text-neutral-600 text-base font-normal font-['Rubik']">Hire</div>
              <div className="text-neutral-600 text-base font-normal font-['Rubik']">Training</div>
              <div className="text-neutral-600 text-base font-normal font-['Rubik']">Scaling</div>
            </div>
            <div className="w-[254.40px] h-[108px] flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="text-indigo-900 text-lg font-medium font-['Rubik']">Bussiness</div>
              <div className="text-neutral-600 text-base font-normal font-['Rubik']">Hire</div>
              <div className="text-neutral-600 text-base font-normal font-['Rubik']">Training</div>
              <div className="text-neutral-600 text-base font-normal font-['Rubik']">Scaling</div>
            </div>
            <div className="w-[254.40px] h-[108px] flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="text-indigo-900 text-lg font-medium font-['Rubik']">Bussiness</div>
              <div className="text-neutral-600 text-base font-normal font-['Rubik']">Hire</div>
              <div className="text-neutral-600 text-base font-normal font-['Rubik']">Training</div>
              <div className="text-neutral-600 text-base font-normal font-['Rubik']">Scaling</div>
            </div>
            <div className="w-[254.40px] h-[55px] flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="text-indigo-900 text-lg font-medium font-['Rubik']">Fllow Us</div>
              <div className="justify-start items-start gap-4 inline-flex">
                <AiFillTwitterCircle className="w-6 h-6 relative"/>
                <FaSquareYoutube className="w-6 h-6 relative  rounded-2xl "/>
                <BsFacebook className="w-6 h-6 relative"/>
                <FaPinterest className="w-6 h-6 relative"/>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/5 h-[17px] justify-center items-start gap-2.5 inline-flex">
          <div>
            <span className="text-neutral-600 text-sm font-normal font-['Rubik']">Copyright © All rights reserved by </span>
            {/* <span className="text-blue-500 text-sm font-normal font-['Rubik'] underline">Salesmagiq</span> */}
            <a className="text-blue-500 text-sm font-normal font-['Rubik'] " href="https://www.">Salesmagiq</a>
          </div>
        </div>
      </div>
    </div>
  );
}