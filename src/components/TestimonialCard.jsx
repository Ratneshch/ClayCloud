const TestimonialCard = ({ card }) => {
  return (
    <div
      className="
        w-[85%] sm:w-[300px] md:w-[360px] lg:w-[384px]
        h-auto min-h-[240px]
        shrink-0 rounded-xl border border-slate-200 bg-white shadow-sm
        hover:shadow-md transition-shadow duration-200
        p-4 flex flex-col
      "
    >
      {/* Header */}
      <div className="flex gap-3">
        <img
          src={card.image}
          alt={card.name}
          className="size-10 sm:size-11 rounded-full object-cover"
        />

        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p className="text-base sm:text-lg md:text-xl font-semibold text-slate-900">
              {card.name}
            </p>

            {/* Verified Badge */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="#1DA1F2"
              className="translate-y-[1px]"
            >
              <path d="M22.25 12l-2.02-2.74.28-3.38-3.32-.73-1.94-2.82L12 3.09 8.75 2.33 6.81 5.15l-3.32.73.28 3.38L1.75 12l2.02 2.74-.28 3.38 3.32.73 1.94 2.82L12 20.91l3.25.76 1.94-2.82 3.32-.73-.28-3.38L22.25 12zM10.6 16.2l-3.3-3.3 1.4-1.4 1.9 1.9 4.6-4.6 1.4 1.4-6 6z" />
            </svg>
          </div>

          <span className="text-sm sm:text-base text-slate-500">{card.handle}</span>
        </div>
      </div>

      {/* Body */}
      <p className="text-sm sm:text-base md:text-lg text-slate-800 mt-4 line-clamp-4">
        {card.quote}
      </p>

      {/* Footer */}
      <div className="mt-auto pt-4">
        <div className="flex items-center justify-between text-slate-500 text-xs sm:text-sm">
          <div className="flex items-center gap-1">
            <span className="text-sm sm:text-base">Posted on</span>

            {/* Posted Icon */}
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path
                d="M1 5.5L4.5 9L10 1"
                stroke="currentColor"
                strokeWidth="1.6"
                fill="none"
              />
            </svg>
          </div>

          <p className="text-sm sm:text-base">{card.date}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
