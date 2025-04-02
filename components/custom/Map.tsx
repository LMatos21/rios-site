import { useEffect } from "react";

export default function Map() {
  useEffect(() => {
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.095643946594!2d-43.30825518449152!3d-22.90556054321527";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.style.border = "0";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    const mapContainer = document.getElementById("map-container");
    mapContainer?.appendChild(iframe);
  }, []);

  return <div id="map-container" className="w-full h-full" />;
}