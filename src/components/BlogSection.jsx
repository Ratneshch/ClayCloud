import React, { useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

const BlogSection = () => {
  const scrollRef = useRef(null);
  const { t } = useTranslation();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  // Fetch posts from translation file
  const posts = t("posts", { returnObjects: true });

  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-3">
          {t("ourBlog")}
        </h2>

        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>

        {/* Desktop Arrows */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-[-35px] top-1/2 -translate-y-1/2 bg-[#FAA307] text-white p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all z-10"
        >
          <ArrowLeft size={22} />
        </button>

        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-[-35px] top-1/2 -translate-y-1/2 bg-[#FAA307] text-white p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all z-10"
        >
          <ArrowRight size={22} />
        </button>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="
            flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 px-1 h-[520px] pt-5
            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {posts.map((post) => (
            <div
              key={post.id}
              className="
                snap-start bg-white rounded-xl shadow-[4px_4px_10px_rgba(250,163,7,0.75)]
                hover:shadow-orange-300/80 hover:scale-[1.05]
                transition-all duration-500
                flex flex-col 
                min-w-[90%] sm:min-w-[48%] md:min-w-[32%]
              "
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover rounded-t-xl"
              />

              {/* Content */}
              <div className="p-5 flex flex-col h-full">
                <span className="bg-[#FAA307] text-white px-3 py-1 rounded-full text-xs font-semibold w-fit">
                  {post.tag}
                </span>

                <h3 className="mt-4 font-semibold text-xl leading-snug">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2 mb-4 leading-relaxed flex-grow">
                  {post.description}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    src={post.authorImage}
                    className="w-10 h-10 rounded-full"
                    alt={post.author}
                  />
                  <div>
                    <p className="text-gray-800 text-sm font-semibold">
                      {post.author}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {post.date} • {post.readTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <button className="mt-10 bg-[#FAA307] hover:bg-yellow-500 text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto font-semibold transition-all">
          {t("viewAll")} <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
