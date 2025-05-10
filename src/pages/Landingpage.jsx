import { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { RiMessengerLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Landingpage() {
  const navigate = useNavigate();

  return (
    <>
      <div
        id="home"
        className="flex items-center justify-around p-3 bg-green-800 text-white shadow-xl/20 sticky top-0  z-10"
      >
        <div className="">
          <h1 className="text-3xl font-bold text-shadow-lg/25 font-mono">
            SewaStickGolf
          </h1>
        </div>
        <div className="flex items-center gap-5">
          <a
            className="font-bold text-shadow-lg/25 cursor-pointer"
            href="#about"
          >
            About
          </a>
          <a
            className="font-bold text-shadow-lg/25 cursor-pointer"
            href="#rental"
          >
            Rental
          </a>
          <a
            className="font-bold text-shadow-lg/25 cursor-pointer"
            href="#product"
          >
            Product
          </a>
          <a
            className="font-bold text-shadow-lg/25 cursor-pointer"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center p-2 bg-[url(/img/foto-4.jpg)] bg-fixed bg-top ">
        <p className="text-2xl font-light text-shadow-lg/15 text-white ">
          Presented by tunk at 2025
        </p>
      </div>

      <div
        id="about"
        className="flex gap-10 justify-center items-center w-full h-screen bg-[url(/img/foto-2.jpg)] bg-center bg-cover text-white id-1"
      >
        <div className="p-30 w-full h-full relative z-0 ">
          <div className="absolute left-0 top-0 ml-15 mt-15  ">
            <p className="text-8xl font-bold text-shadow-lg/35 font-serif">
              About
            </p>
            <p className="text-8xl font-bold pb-10 text-shadow-lg/35 font-serif">
              Us
            </p>
            <p className="p-2 font-light">
              "Layanan sewa stick golf di Bandung untuk memenuhi kebutuhan para
              pecinta olahraga golf dengan kualitas terbaik dan harga
              terjangkau"
            </p>
          </div>
        </div>
        <div className="p-30 w-full h-full relative">
          <div className=" absolute left-10 right-10 bottom-0 flex flex-col ml-10 ">
            <p className="text-center text-4xl font-medium text-shadow-lg/35 pb-2 font-serif">
              Stick Golf Rental
            </p>
            <img
              className="rounded-xl   shadow-xl/100"
              src="/img/foto-1.JPG"
              alt=""
            />
            <p className="p-2 text-center font-light">
              Jasa rental stick golf seputar kota bandung dan jatinangor
            </p>
          </div>
        </div>
        <div className="p-30 w-full h-full relative">
          <div className="absolute bottom-30 right-0 mr-10 left-20 flex flex-col   ">
            <p className="text-center text-4xl font-medium text-shadow-lg/35 pb-2 font-serif">
              Selling Products
            </p>
            <img
              className="rounded-xl shadow-xl/100"
              src="/img/shockb.JPG"
              alt=""
            />
            <p className="p-2 text-center font-light">
              menjual berbagai product golf
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-75 bg-[url(/img/foto-4.jpg)] bg-center bg-fixed bg-cover flex relative text-white justify-center items-center gap-3">
        <svg className="size-25 animate-bounce flex items-center justify-items-center ">
          <FaArrowCircleDown size={100} />
        </svg>
      </div>

      <div
        id="rental"
        className="flex justify-center w-full h-screen items-center flex-col bg-[url(/img/foto-6.jpg)] bg-center bg-cover text-white "
      >
        <div className="p-5">
          <p className="text-6xl font-semibold font-serif text-shadow-lg/70 text-white">
            Rental Stick Golf
          </p>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-full h-full relative">
            <div className=" absolute left-20 right-20  top-3 flex flex-col">
              <p className="text-4xl font-medium text-center text-shadow-lg/50 pb-3 font-serif text-neutral-200">
                Bags 1
              </p>
              <img
                className="rounded-xl   shadow-xl/100"
                src="/img/shockb.JPG"
                alt=""
              />
              <p className="text-center text-2xl font-medium text-shadow-lg/35 pb-3 pt-3">
                Rp.500.000
              </p>
              <button
                onClick={() => navigate("/Bag1")}
                className="p-2 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 text-2xl font-mono rounded-xl text-black bg-neutral-100 shadow-xl/30 cursor-pointer "
              >
                See More
              </button>
            </div>
          </div>
          <div className="w-full h-full relative ">
            <div className=" absolute left-20 right-20 bottom-3 flex flex-col">
              <p className="text-4xl font-medium text-center text-shadow-lg/50 pb-3 font-serif text-neutral-200">
                Bags 2
              </p>
              <img
                className="rounded-xl   shadow-xl/100"
                src="/img/shockb.JPG"
                alt=""
              />
              <p className="text-center text-2xl font-medium text-shadow-lg/35 pb-3 pt-3">
                Price
              </p>
              <button
                onClick={() => navigate("/Bag2")}
                className="p-2 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 text-2xl font-mono rounded-xl text-black bg-neutral-100 shadow-xl/30 cursor-pointer "
              >
                See More
              </button>
            </div>
          </div>
          <div className="w-full h-full relative ">
            <div className=" absolute left-20 right-20 top-3 flex flex-col ">
              <p className="text-4xl font-medium text-center text-shadow-lg/50 pb-3 font-serif text-neutral-200">
                Bags 3
              </p>
              <img
                className="rounded-xl   shadow-xl/100"
                src="/img/shockb.JPG"
                alt=""
              />
              <p className="text-center text-2xl font-medium text-shadow-lg/35 pb-3 pt-3">
                Price
              </p>
              <button
                onClick={() => navigate("/Bag3")}
                className="p-2 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 text-2xl font-mono rounded-xl text-black bg-neutral-100 shadow-xl/30 cursor-pointer "
              >
                See More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-75 bg-[url(/img/foto-4.jpg)] bg-center bg-fixed bg-cover flex flex-col text-white justify-center items-center gap-3">
        <svg className="size-25 animate-bounce flex items-center justify-items-center ">
          <FaArrowCircleDown size={100} />
        </svg>
      </div>

      <div
        id="product"
        className="flex justify-center w-full h-screen items-center bg-[url(/img/foto-6.jpg)] bg-center bg-cover text-white flex-col"
      >
        <div className="p-5">
          <p className="text-6xl font-semibold font-serif text-shadow-lg/70 text-white">
            Our Product
          </p>
        </div>
        <div className="flex items-center justify-center relative w-full h-full">
          <div className="w-full h-full relative ">
            <div className=" absolute left-10 right-10 top-3  flex flex-col">
              <p className="text-4xl font-medium text-center text-shadow-lg/50 pb-3 font-serif text-neutral-200">
                Pocket Ball-Tee
              </p>
              <img
                className="rounded-xl   shadow-xl/100"
                src="/img/fotopb.JPG"
                alt=""
              />
              <p className="text-center text-2xl font-medium text-shadow-lg/35 pb-3 pt-3">
                Rp.500.000
              </p>
              <button
                onClick={() => navigate("/Pocketball")}
                className="p-2 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 text-2xl font-mono rounded-xl text-black bg-neutral-100 shadow-xl/30 cursor-pointer "
              >
                See More
              </button>
            </div>
          </div>
          <div className="w-full h-full relative ">
            <div className=" absolute left-10 right-10 bottom-3 flex flex-col">
              <p className="text-4xl font-medium text-center text-shadow-lg/50 pb-3 font-serif text-neutral-200">
                Long Shock
              </p>
              <img
                className="rounded-xl   shadow-xl/100"
                src="/img/fotosl.JPG"
                alt=""
              />
              <p className="text-center text-2xl font-medium text-shadow-lg/35 pb-3 pt-3">
                Price
              </p>

              <button
                onClick={() => navigate("/Shock")}
                className="p-2 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 text-2xl font-mono rounded-xl text-black bg-neutral-100 shadow-xl/30 cursor-pointer "
              >
                See More
              </button>
            </div>
          </div>
          <div className="w-full h-full relative ">
            <div className=" absolute left-10 right-10 top-3 flex flex-col ">
              <p className="text-4xl font-medium text-center text-shadow-lg/50 pb-3 font-serif text-neutral-200">
                Mirror Chain
              </p>
              <img
                className="rounded-xl   shadow-xl/100"
                src="/img/fotomc.JPG"
                alt=""
              />
              <p className="text-center text-2xl font-medium text-shadow-lg/35 pb-3 pt-3">
                Price
              </p>
              <button
                onClick={() => navigate("/Mirrorchain")}
                className="p-2 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 text-2xl font-mono rounded-xl text-black bg-neutral-100 shadow-xl/30 cursor-pointer "
              >
                See More
              </button>
            </div>
          </div>
          <div className="w-full h-full relative ">
            <div className=" absolute left-10 right-10 bottom-3 flex flex-col ">
              <p className="text-4xl font-medium text-center text-shadow-lg/50 pb-3 font-serif text-neutral-200">
                Stocking Golf
              </p>
              <img
                className="rounded-xl   shadow-xl/100"
                src="/img/fotosg.JPG"
                alt=""
              />
              <p className="text-center text-2xl font-medium text-shadow-lg/35 pb-3 pt-3">
                Price
              </p>
              <button
                onClick={() => navigate("/Stocking")}
                className="p-2 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 text-2xl font-mono rounded-xl text-black bg-neutral-100 shadow-xl/30 cursor-pointer "
              >
                See More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-75 bg-[url(/img/foto-4.jpg)] bg-center bg-fixed bg-cover flex flex-col text-white justify-center items-center gap-3">
        <svg className="size-25 animate-bounce flex items-center justify-items-center ">
          <FaArrowCircleDown size={100} />
        </svg>
      </div>

      <div
        id="contact"
        className="w-full h-100 flex flex-col items-center justify-center bg-[url(/img/foto-6.jpg)] bg-top bg-cover text-white "
      >
        <div className="w-full h-100 flex flex-col items-center justify-center ">
          <div>
            <p className="p-3 text-6xl font-medium text-shadow-lg/35 font-mono ">
              Connect With Us
            </p>
          </div>
          <div className="flex items-center justify-evenly w-full h-full">
            <div className="flex flex-col items-center">
              <p className="p-2 text-3xl font-semibold text-shadow-lg/70 font-serif pb-5 text-neutral-100 ">
                Booking Bags
              </p>
              <svg className="size-10 animate-bounce flex items-center justify-items-center  ">
                <FaArrowCircleDown size={39} />
              </svg>
              <button className="cursor-pointer transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 pt-2 pb-2 pr-25 pl-25 text-2xl font-medium rounded-xl bg-neutral-100 text-black ">
                Here
              </button>
            </div>
            <div className="flex flex-col items-center">
              <p className="p-2 text-3xl font-semibold text-shadow-lg/70 font-serif pb-5 text-neutral-100 ">
                Buying Products
              </p>
              <svg className="size-10 animate-bounce flex items-center justify-items-center  ">
                <FaArrowCircleDown size={39} />
              </svg>
              <Dialog>
                <DialogTrigger className="cursor-pointer transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 pt-2 pb-2 pr-25 pl-25 text-2xl font-medium rounded-xl bg-neutral-100 text-black ">
                  Here
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader className="w-full h-100 flex flex-col items-center justify-center gap-10">
                    <button className="flex items-center justify-center gap-1 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer pt-2 pb-2 pl-11 pr-11 bg-white text-black shadow-xl/30 rounded-xl">
                      <img
                        className="w-8 h-8"
                        src="/img/tokopedia.jpg"
                        alt=""
                      />
                      <p className="text-xl font-medium font-mono text-green-700">
                        Tokopedia
                      </p>
                    </button>
                    <button className="flex items-center justify-center gap-1 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer pt-2 pb-2 pl-15 pr-15 bg-white text-black shadow-xl/30 rounded-xl">
                      <img className="w-8 h-8" src="/img/shopee.jpg" alt="" />
                      <p className="text-xl font-medium font-mono text-orange-600">
                        Shopee
                      </p>
                    </button>

                    <button className="flex gap-1 items-center justify-center transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer pt-2 pb-2 pl-13 pr-13 bg-white text-black shadow-xl/30 rounded-xl">
                      <FaWhatsapp size={30} color="green" />
                      <p className="text-xl font-medium font-mono text-green-700">
                        Whatsapp
                      </p>
                    </button>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <div className="w-full h-4 bg-neutral-200"></div>

        <div className="flex items-center justify-center w-full h-20 gap-3  bg-[url(/img/foto-4.jpg)] bg-center bg-fixed bg-cover">
          <img className="w-25 h-15 rounded-xl" src="/img/bni.jpg" alt="" />
          <img className="w-25 h-15 rounded-xl" src="/img/dana.jpg" alt="" />
          <img className="w-25 h-15 rounded-xl" src="/img/gopay.jpg" alt="" />
        </div>
      </div>

      <div className="w-full h-3 bg-neutral-200"></div>

      <div className="w-full h-100 flex items-center bg-[url(/img/foto-6.jpg)] bg-bottom bg-cover text-white ">
        <div className=" flex w-full flex-col items-center  ">
          <p className="text-6xl font-bold text-shadow-lg/50 font-serif ">
            Sewa
          </p>
          <p className="text-6xl font-bold text-shadow-lg/50 font-serif ">
            StickGolf
          </p>
        </div>
        <div className="w-full  flex ">
          <div className="w-full gap-2 flex-col flex">
            <p className="text-2xl  text-neutral-300 pb-2 font-sans">Info</p>
            <p>Home</p>
            <p>About Us</p>
            <p>Service</p>
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-2xl font-serif text-neutral-300 pb-2">Contact</p>
            <div className="flex items-center gap-1">
              <FaWhatsapp size={20} />
              <p>+62 82231028768</p>
            </div>
          </div>
          <div className="w-full  flex flex-col gap-2">
            <p className="text-2xl font-serif text-neutral-300 pb-2">Social</p>
            <div className="flex items-center  gap-1 font-sans">
              <FaInstagram size={20} />
              <p>@sewastickgolfbdg</p>
            </div>
            <div className="flex items-center  gap-1 font-sans">
              <CiFacebook size={20} />
              <p>Facebook</p>
            </div>
            <div className="flex items-center  gap-1 font-sans">
              <RiMessengerLine size={20} />
              <p>Messenger</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around  w-full h-15  bg-[url(/img/foto-4.jpg)] bg-center bg-fixed bg-cover text-white">
        <p>© 2025 Make Over. All rights reserved.</p>
        <p>Privacy Policy | Terms & Conditions</p>
      </div>
    </>
  );
}
