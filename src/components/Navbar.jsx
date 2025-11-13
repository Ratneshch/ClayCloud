import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { RiTranslateAi2 } from "react-icons/ri";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { t, i18n } = useTranslation();

  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिंदी" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-black/40 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {/* ✅ Logo */}
        <h1 className="text-xl md:text-3xl font-bold text-white tracking-wide">
          HrWebsite
        </h1>

        {/* ✅ Desktop Menu */}
        <ul className="hidden md:flex space-x-10 font-medium text-white">
          {[
            t("navbar.product"),
            t("navbar.customer"),
            t("navbar.resources"),
            t("navbar.pricing"),
            t("navbar.about"),
          ].map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="hover:text-[#FAA307] transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* ✅ Desktop Buttons + Language Selector */}
        <div className="hidden md:flex items-center space-x-4 relative">
          {/* Login */}
          <button className="px-4 py-2 border border-white/50 text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300">
            {t("navbar.login")}
          </button>

          {/* Get Demo */}
          <button className="px-4 py-2 rounded-lg bg-[#FAA307] text-white hover:bg-yellow-600 transition-all duration-300">
            {t("navbar.demo")}
          </button>

          {/* 🌐 Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="px-3 py-2 border border-white/50 text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
            >
          <RiTranslateAi2 />
  {i18n.language.toUpperCase()}
            </button>

            {showLangMenu && (
              <ul className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg w-32">
                {languages.map((lang) => (
                  <li
                    key={lang.code}
                    onClick={() => {
                      i18n.changeLanguage(lang.code);
                      setShowLangMenu(false);
                    }}
                    className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                      i18n.language === lang.code
                        ? "font-semibold bg-gray-100"
                        : ""
                    }`}
                  >
                    {lang.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* ✅ Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/85 backdrop-blur-sm p-6 text-white transition-all duration-300">
          <ul className="space-y-4 text-center text-lg">
            {[
              t("navbar.product"),
              t("navbar.customer"),
              t("navbar.resources"),
              t("navbar.pricing"),
              t("navbar.about"),
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block text-white hover:!text-[#FAA307] transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* ✅ Mobile Language Selector */}
          <div className="mt-6 flex justify-center">
            <select
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              value={i18n.language}
              className="bg-black text-white border border-white/50 px-4 py-2 rounded-lg"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300">
              {t("navbar.login")}
            </button>
            <button className="hidden sm:flex px-4 py-3 rounded-lg bg-[#FAA307] text-white hover:bg-yellow-600 transition-all duration-300">
              {t("navbar.demo")}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;