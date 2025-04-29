import Body2 from "@/components/Body2";
import { useNavigate } from "react-router-dom";
import shy1 from "../assets/shy1.jpeg"
import tsundre1 from "../assets/tsundre1.jpeg"
import mature3 from "../assets/mature3.jpeg"
import hgirl1 from "../assets/hgirl1.jpeg"

const girls = [
  { id: 1, name: "Yuki", img: shy1, personality: "shy" },
  { id: 2, name: "Aiko", img: tsundre1, personality: "tsundere" },
  { id: 3, name: "Mika", img: mature3, personality: "mature" },
  { id: 4, name: "Alina", img: hgirl1, personality: "hot" },
];


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-4">
      <Body2></Body2>
      <h1 style={{fontFamily:"Festive, cursive"}} className="text-6xl font-bold mb-8  text-gray-100 tracking-[8px]   hover:text-pink-400">Choose Your Waifu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
        {girls.map((girl) => (
          <div
            key={girl.id}
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => navigate(`/chat?type=${girl.personality}`)}
          >
            <img
              src={girl.img}
              alt={girl.name}
              className="rounded-2xl w-64 h-94 md:h-full object-cover shadow-xl shadow-amber-400  border-black-400 border-8 "
            />
            <p className="text-center mt-2 text-2xl font-bold text-white">{girl.name}</p>
          </div>
        ))}
      </div>

      
    </div>
  );
}
