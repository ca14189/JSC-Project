import React from "react";

interface CounterSectionItem {
  type: "text" | "media";
  title?: string;
  data?: string;
  media_ref?: string;
}

interface CounterProps {
  counterSectionData: CounterSectionItem[];
}

const CounterSection: React.FC<CounterProps> = ({ counterSectionData }) => {
  // Separate text and media items
  const mediaItems = counterSectionData.filter((item) => item.type === "media");
  const textItems = counterSectionData.filter((item) => item.type === "text");
//   console.log("Text Items ::::>", textItems);

  const leftCircleValue = textItems[0]?.title || "100+";
  const leftCircleLabel = textItems[0]?.data || "Global Clients";

  // Combine title + data here
  const rawText = textItems[1]
  ? (textItems[1].data || "").replace(
      /(in over)/i, // find "in over"
      `$1 ${textItems[1].title || ""}` // add title after it
    )
  : "Our passion for diverse technology solutions and interactive customer-centric services have enabled us to serve in over countries.";

  const leftDescription = rawText.trim();

  const stats = textItems.slice(2);

  return (
    <div
      className="mt-5"
      style={{
        backgroundImage: mediaItems[0]?.media_ref
          ? `url(${mediaItems[0].media_ref})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto text-center px-4">
        <div className="flex flex-col lg:flex-row justify-center pt-5 pb-4">
          {/* Left section */}
          <div className="relative flex items-center justify-center mr-4">
            {/* Circle Image (background) */}
            {mediaItems[1]?.media_ref ? (
              <img
                src={mediaItems[1].media_ref}
                alt="counter"
                className="w-28 h-28 object-contain"
              />
            ) : (
              <div className="w-28 h-28 rounded-full bg-brandlight"></div>
            )}

            {/* Text Overlay (always white) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <span className="text-xl font-bold text-white">{leftCircleValue}</span>
              <p className="text-xs font-normal text-white">{leftCircleLabel}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-white text-center lg:text-center mt-4 lg:mt-0 max-w-sm">
            {leftDescription}
          </p>

          {/* Right section */}
          <div className="flex justify-around lg:w-1/2">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-bold text-brandlight">{stat.title}</p>
                <p className="text-brandyellow text-sm">{stat.data}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
