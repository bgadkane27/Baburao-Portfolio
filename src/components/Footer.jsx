import { useState, useEffect } from "react";
import { styles } from "../styles";

const Footer = () => {
  const [weather, setWeather] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const apiKey = "91aab7b459eb683b972c29462a1964eb";
    const city = "Pune";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((error) => console.error("Error fetching weather:", error));
  }, []);

  return (
    <footer id="footer"
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed bottom-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className="w-full flex items-center justify-between mx-auto px-4">
        <div>
          <p className="text-gray-300 text-xs tracking-wide">&copy; 2025 Baburao Adkane.</p>
        </div>
        <div>
          {weather ? (
            <p className="text-xs text-cyan-500">
              Weather in Pune: {weather.weather[0].main}, {weather.main.temp}°C 
            </p>
          ) : (
            <p className="text-xs">Loading weather...</p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;