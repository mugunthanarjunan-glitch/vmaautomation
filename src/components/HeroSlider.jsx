import { useState, useEffect } from "react";
import "../styles/heroSlider.css";

function HeroSlider() {
  const slides = [
    {
      title: "Industrial Automation Solutions",
      subtitle: "PLC | HMI | VFD | Panels",
      image: "/images/heroslider/image.png"
    },
    {
      title: "Trusted Automation Products",
      subtitle: "Quality & Reliability",
      image: "/images/heroslider/imagecopy.png"
    },
    {
      title: "Custom Panel Manufacturing",
      subtitle: "Professional Engineering Support",
      image: "/images/heroslider/imagecopy2.png"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay">
            <h2>{slide.title}</h2>
            <p>{slide.subtitle}</p>
          </div>
        </div>
      ))}

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active-dot" : "dot"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;