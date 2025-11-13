import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import image from "../assets/image.jpg";
import { BsGraphUp } from "react-icons/bs";
import { FaClock, FaCheckCircle } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const [showLangMenu, setShowLangMenu] = useState(false); // for dropdown toggle

  // Supported languages
  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिंदी" },
    { code: "kn", label: "ಕನ್ನಡ" },
    { code: "mh", label: "मराठी" },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center font-[Poppins] overflow-hidden"
      aria-label="Hero Section"
    >
      {/* ✅ Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>

     

      {/* ✅ HERO CONTENT */}
      <div className="relative max-w-3xl mx-auto text-center px-4 text-white mt-16 md:mt-10">
        <h1
          className="text-3xl md:text-5xl font-[Poly] leading-tight"
          aria-live="polite"
        >
          {t("hero.heading")}
        </h1>

        <p className="mt-6 text-lg md:text-[22px] font-[Roboto] font-light max-w-[960px] mx-auto leading-7 md:leading-8">
          {t("hero.subheading")}
        </p>

        <div className="mt-6 flex flex-col md:flex-row justify-center gap-3">
          <button className="bg-[#FAA307] text-white px-7 py-3 rounded-xl text-md font-semibold hover:bg-yellow-600 transition">
            {t("navbar.demo")}
          </button>
          <button className="bg-white text-gray-900 px-7 py-3 rounded-xl text-md font-semibold hover:bg-gray-200 transition">
            {t("navbar.signup")}
          </button>
        </div>
      </div>

      {/* ✅ Floating Cards */}
      <div className="hidden md:flex absolute left-3 md:left-8 top-72 md:top-60 bg-white p-3 shadow-lg rounded-lg items-center gap-2 float-animation">
        <div className="bg-[#FAA307] p-2 rounded-md">
          <BsGraphUp className="text-white text-xl" />
        </div>
        <div>
          <p className="font-bold">45%</p>
          <p className="text-gray-600 text-xs">{t("hero.efficiency")}</p>
        </div>
      </div>

      <div className="hidden md:flex absolute right-3 md:right-8 top-[450px] md:top-72 bg-white p-3 shadow-lg rounded-lg items-center gap-2 float-animation">
        <div className="bg-[#FAA307] p-2 rounded-md">
          <FaClock className="text-white text-xl" />
        </div>
        <div>
          <p className="font-bold">80hrs</p>
          <p className="text-gray-600 text-xs">{t("hero.saved")}</p>
        </div>
      </div>

      {/* ✅ Footer Stats */}
     <div className="absolute bottom-20 sm:bottom-8 md:bottom-6 w-full text-center text-white">

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-lg font-[Roboto]">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-yellow-500 text-lg md:text-2xl" />
            <span>{t("hero.nocard")}</span>
          </div>
          <div className="flex items-center gap-2">
            <IoIosPeople className="text-yellow-500 text-lg md:text-2xl" />
            <span>{t("hero.trust")}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500 text-lg md:text-2xl" />
            <span>{t("hero.rating")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;