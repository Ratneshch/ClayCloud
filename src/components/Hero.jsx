import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import bgVideo from "../assets/v1.mp4";


const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const [showLangMenu, setShowLangMenu] = useState(false); // for dropdown toggle

  // Supported languages
  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिंदी" }
   
  ];

  return (
  <section
  className="relative min-h-[80vh] flex items-center justify-center font-[Poppins] overflow-hidden"
  aria-label="Hero Section"
>
  {/* ✅ Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover blur-[1px] scale-105"
    src={bgVideo}
    autoPlay
    muted
    loop
    playsInline
  ></video>

  {/* ✅ Dark Side Gradient Overlay */}
  <div
    className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"
    aria-hidden="true"
  ></div>

  {/* ✅ HERO CONTENT */}
  <div className="relative max-w-3xl mx-auto text-center px-4 text-white mt-10 md:mt-15">
    <h1 className="text-2xl sm:text-3xl md:text-5xl font-[Roboto] font-bold leading-tight">
      {t("hero.heading1")} <br />
      <span className="block font-light">{t("hero.heading2")}</span>
    </h1>

    <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-[22px] font-[Roboto] font-light max-w-[960px] mx-auto leading-6 md:leading-8">
      {t("hero.subheading1")} <br />
      <span>{t("hero.subheading2")}</span>
      <br />
      <span>{t("hero.subheading3")}</span>
    </p>

    <div className="mt-6 flex flex-col md:flex-row justify-center gap-3">
      <button className="bg-[#FAA307] text-white px-6 py-3 rounded-md   text-md font-semibold hover:bg-yellow-600 transition">
        {t("navbar.enquiry")}
      </button>
    </div>
  </div>
</section>



  );
};

export default Hero;
