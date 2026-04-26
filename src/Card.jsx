<<<<<<< HEAD
import React from "react";
import './index.css'
import { IoMdArrowRoundBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Card = ({User}) => {
  return (
 
    <div className="m-5 p-10 ">
        <div className="hero h-96 w-70 bg-gray-400 rounded-2xl ">
            <div className="nav flex flex-wrap w-69 h-5">
                <div className="back mt-3 ml-2"><IoMdArrowRoundBack /></div>
                <div className="dots mt-[-16px] ml-64"><BsThreeDotsVertical /></div>   
            </div><div className=" flex flex-col items-center">
            <div className="pfp bg-white h-40 w-40 rounded-full mt-4 ml-full border border-4 border-gray-600 img bg-cover bg-center"   style={{ backgroundImage: `url(${User.img})`}}></div>
            <div className="mt-4"><b className="text-black">Employee: </b> <h3 className="mt-1 inline">{User.name}</h3></div>
            <div className="mt-1"><b className="text-black">Role: </b>{User.role}</div>
            <div className="mt-1"><b className="text-black">Working Hrs. </b>{User.hours}</div>
            <div className="mt-1"><b className="text-black">Salary: </b>{User.salary}</div>
            <div className="grid grid-cols-4">
                <div className="m-3 w-6 h-6 bg-white text-red-600 items-center font-bold text-2xl  rounded-sm"><FaYoutube /></div>
                <div className="m-3 w-6 h-6 bg-white text-pink-400 items-center font-bold text-2xl  rounded-sm"><FaInstagram /></div>
                <div className="m-3 w-6 h-6 bg-white text-blue-400 items-center font-bold text-2xl  rounded-sm"><FaTwitter /></div>
                <div className="m-3 w-6 h-6 bg-white text-blue-600 items-center font-bold text-2xl  rounded-sm"><FaLinkedin /></div>
            </div></div>
        </div>
    </div>
  )
}

=======
import React from "react";
import './index.css'
import { IoMdArrowRoundBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Card = ({User}) => {
  return (
 
    <div className="m-5 p-10 ">
        <div className="hero h-96 w-70 bg-gray-400 rounded-2xl ">
            <div className="nav flex flex-wrap w-69 h-5">
                <div className="back mt-3 ml-2"><IoMdArrowRoundBack /></div>
                <div className="dots mt-[-16px] ml-64"><BsThreeDotsVertical /></div>   
            </div><div className=" flex flex-col items-center">
            <div className="pfp bg-white h-40 w-40 rounded-full mt-4 ml-full border border-4 border-gray-600 img bg-cover bg-center"   style={{ backgroundImage: `url(${User.img})`}}></div>
            <div className="mt-4"><b className="text-black">Employee: </b> <h3 className="mt-1 inline">{User.name}</h3></div>
            <div className="mt-1"><b className="text-black">Role: </b>{User.role}</div>
            <div className="mt-1"><b className="text-black">Working Hrs. </b>{User.hours}</div>
            <div className="mt-1"><b className="text-black">Salary: </b>{User.salary}</div>
            <div className="grid grid-cols-4">
                <div className="m-3 w-6 h-6 bg-white text-red-600 items-center font-bold text-2xl  rounded-sm"><FaYoutube /></div>
                <div className="m-3 w-6 h-6 bg-white text-pink-400 items-center font-bold text-2xl  rounded-sm"><FaInstagram /></div>
                <div className="m-3 w-6 h-6 bg-white text-blue-400 items-center font-bold text-2xl  rounded-sm"><FaTwitter /></div>
                <div className="m-3 w-6 h-6 bg-white text-blue-600 items-center font-bold text-2xl  rounded-sm"><FaLinkedin /></div>
            </div></div>
        </div>
    </div>
  )
}

>>>>>>> c4a15f8 (Initial commit)
export default Card