import React from "react";
import { useTranslation } from "react-i18next";

const TrustedBrands = () => {
  const { t } = useTranslation();

  const companyLogos = ["netflix", "google", "linkedin", "instagram", "facebook"];

  return (
    <div className="flex items-center justify-center sm:w-full">
      <div className="max-w-6xl w-full py-10 sm:py-18">
        
        {/* Heading Section */}
        <div className="text-center font-poppins mb-6 sm:mb-14">
          <h1 className="font-bold sm:text-[48px] text-[20px] font-poppins">
            {t("trusted_brand.0.brand_heading")}
          </h1>
          <p className="text-description font-roboto text-sm sm:text-[20px] text-center mx-auto sm:max-w-1/2 max-w-[60%]">
            {t("trusted_brand.0.brand_para")}
          </p>
        </div>

        {/* Scrolling Brands Section */}
        <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
          <div className="absolute left-0 top-0 h-full w-8 sm:w-40 z-10 pointer-events-none bg-linear-to-r from-white to-transparent" />

          <div
            className="animate-marquee flex will-change-transform sm:min-w-[200%] min-w-2"
            style={{ animationDuration: "15s" }}
          >
            <div className="flex">
              {[...companyLogos, ...companyLogos].map((company, index) => (
                <img
                  key={index}
                  src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${company}.svg`}
                  alt={company}
                  className="sm:h-10 h-8 object-cover sm:mx-6 mx-0"
                  draggable={false}
                />
              ))}
            </div>
          </div>

          <div className="absolute right-0 top-0 h-full w-8 sm:w-40 z-10 pointer-events-none bg-linear-to-l from-white to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
