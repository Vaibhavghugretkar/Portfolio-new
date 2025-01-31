import { useEffect, useRef } from "react";
 
const ScrollingCarousel = () => {
  const groupRef = useRef(null);

  const images = [
    "./assets/html.png",
    "./assets/css-3.png",
    "./assets/Tailwind CSS.png",
    "./assets/programing.png",,
    "./assets/pngwing.com.png",
    "./assets/pngwing.com (1).png",
     "./assets/icons8-firebase-96.png",
     "./assets/github.png"
    
  ];

  useEffect(() => {
    const group = groupRef.current;
    if (group) {
      // Duplicate images to create an infinite scrolling effect
      const clonedNodes = [...group.children].map((node) =>
        node.cloneNode(true)
      );
      clonedNodes.forEach((node) => group.appendChild(node));
    }
  }, []);

  return (
    <div className="carousel">
      <div className="group" ref={groupRef}>
        {images.concat(images).map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} className="image" />
        ))}
      </div>
      <style jsx>{`
        .carousel {
          margin: 0 auto;
          padding: 20px 0;
          max-width: 800px;
          overflow: hidden;
          display: flex;
          white-space: nowrap;
        }

        .group {
          display: flex;
          gap: 20px;
          animation: scrolling 10s linear infinite;
        }

        .image {
          width: 150px;
          height: 150px;
          object-fit: contain; /* Prevents distortion */
          border-radius: 12px;
        }

        @keyframes scrolling {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%); /* Moves half, ensuring seamless transition */
          }
        }

        .carousel:hover .group {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ScrollingCarousel;
