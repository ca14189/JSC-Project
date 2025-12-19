import React from "react";

interface ContentItem {
  type: "text" | "media";
  data?: string; // only for type: 'text'
  media_ref?: string; // only for type: 'media'
}

interface ContactBannerProps {
  header: ContentItem[];
}

const AuthBanner: React.FC<ContactBannerProps> = ({ header }) => {
  // Extract text and media items from header
  const textItems = header.filter((item) => item.type === "text");
  const mediaItem = header.find((item) => item.type === "media");

  const bgImage = mediaItem?.media_ref ? `url(${mediaItem.media_ref})` : "none";
  console.log("backgroundImage applied:", bgImage);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh", // full screen for testing
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        backgroundImage: bgImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#1e293b", // fallback
      }}
    >
      <div style={{ background: "rgba(0,0,0,0.5)", padding: "20px" }}>
        {textItems.map((item, index) => (
          <h1
            key={index}
            style={{
              fontSize: index === 0 ? "2.5rem" : "1.2rem",
              fontWeight: index === 0 ? "bold" : "normal",
              marginTop: index === 0 ? "0" : "8px",
            }}
          >
            {item.data}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default AuthBanner;
