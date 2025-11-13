import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaCloud,
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  const footer = t("footer", { returnObjects: true });

  const iconMap = {
    facebook: FaFacebookF,
    twitter: FaTwitter,
    linkedin: FaLinkedinIn,
    instagram: FaInstagram,
    whatsapp: FaWhatsapp,
  };

  return (
    <footer className="bg-[#03071E] font-poppins py-10 md:py-[64px]">
      {/* Centered container to balance padding */}
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 md:px-[64px]">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20 pb-10 md:pb-12">
          
          {/* Left Section */}
          <div className="flex flex-col justify-between max-w-[483px]">
            <div className="flex items-center text-white mb-3">
              <FaCloud className="h-[36px] w-[45px] mr-2 text-[#FAA307]" />
              <h1 className="text-[28px] sm:text-[30px] font-bold">
                {footer.brand.name}
              </h1>
            </div>
            <p className="text-sm sm:text-base mb-6 text-[#9CA3AF] leading-relaxed">
              {footer.brand.description}
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              {footer.socialIcons.map((icon, index) => {
                const IconComponent = iconMap[icon.iconKey];
                if (!IconComponent) return null;
                return (
                  <a
                    key={index}
                    href={icon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAA307] flex items-center justify-center hover:opacity-90 transition"
                    aria-label={icon.name}
                  >
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 ml-5 gap-x-25 gap-y-10 md:gap-x-[48px]">
            {footer.links.map((col, index) => (
              <div key={index}>
                <h2 className="font-semibold mb-3 sm:mb-4 text-lg text-white">
                  {col.title}
                </h2>
                <ul className="text-[#9CA3AF] space-y-1 sm:space-y-2  text-sm sm:text-base">
                  {col.items.map((item, i) => (
                    <li
                      key={i}
                      className="hover:text-white transition cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-[#374151] my-6 md:my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[#9CA3AF] text-xs sm:text-sm gap-3 sm:gap-0">
          <p className="text-center sm:text-left">{footer.bottom.copyright}</p>

          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            {footer.bottom.policies.map((policy, i) => (
              <span
                key={i}
                className="cursor-pointer transition hover:text-white"
              >
                {policy}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
