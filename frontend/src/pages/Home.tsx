import { useState } from "react";
import { Link } from "react-router-dom";
import Body1 from "@/components/Body1";
import saree2 from "@/assets/saree2.png";

export default function Home() {
  const [isMuted, setIsMuted] = useState(false);
  const audio = new Audio("/audio/gentle.mp3");

  const handlePlay = () => {
    if (!isMuted) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 relative">
      <Body1 />

      <Link to={"/girl"} className="md:-mt-10 cursor-pointer transition-transform hover:scale-105">
        <img
          src={saree2}
          alt="welcome"
          className="md:h-[800px] shadow-lg"
          onClick={handlePlay}
          onMouseEnter={handlePlay}
        />
      </Link>

      {/* Mute Toggle Button */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="fixed bottom-4 right-4  text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-300 transition"
      >
        {isMuted ? "🔇 Sound Off" : "🔊 Sound On"}
      </button>
    </div>
  );
}
