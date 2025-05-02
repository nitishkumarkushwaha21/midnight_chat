import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Send } from 'lucide-react';
import Window from "../components/Window";



type Message = {
  sender: "user" | "bot";
  text: string;
};


export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [searchParams] = useSearchParams();
  const chatRef = useRef<HTMLDivElement>(null);
  const personality = searchParams.get("type") || "shy";
  const girlname = [
    {type:"shy", name: "Yuki"},
    {type: "tsundere", name: "Aiko"},
    {type:"mature", name: "Mika"},
    {type:"hot", name: "Alina"},
  ]

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US"; // use "ja-JP" for Japanese tone
    utterance.pitch = 1.8;
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
          personality: personality,
        }),
      });

      const data = await res.json();

      if (data.reply) {
        const botMsg: Message = { sender: "bot", text: data.reply };
        setMessages((prev) => [...prev, botMsg]);
        // speak(data.reply); // Speak the bot response
      } else {
        const fallback = "Sorry, This is inappropriate to say... 😢";
        setMessages((prev) => [...prev, { sender: "bot", text: fallback }]);
        speak(fallback);
      }
    } catch (err) {
      console.error("Chat error:", err);
      const errorMsg = "Something went wrong... 💔";
      setMessages((prev) => [...prev, { sender: "bot", text: errorMsg }]);
      speak(errorMsg);
    }
  };

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-teal-900 flex justify-center items-center  p-4">
      <div className="flex-1 flex justify-center mb-10">
      <div className="w-full max-w-xl h-[80vh] bg-white rounded-xl shadow-lg flex flex-col border-4 border-yellow-600 shadow-amber-400 self-center">
        <div className="p-4 text-xl font-bold text-pink-950 border-b">
          {girlname.find((girl) => girl.type === personality)?.name}
        </div>

        <div
          ref={chatRef}
          className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-r from-zinc-900 to-blue-900 flex flex-col"
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-[75%] min-w-[50%] p-3 rounded-2xl font-medium ${
                msg.sender === "user"
                  ? "bg-pink-300 self-end"
                  : "bg-pink-100 self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="p-4 border-t flex gap-2">
          <input
            type="text"
            className="flex-1 border-4 rounded-full px-4 py-2"
            placeholder="Type something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-pink-700 text-white px-5 py-2 rounded-4xl"
          >
           <Send/>
          </button>
        </div>
      </div>

      </div>

    

      <div className="  md:flex flex-col items-center justify-center border-2 border-gray-500 mr-5 shadow-xl shadow-lime-400 ">
        <Window/>
        
      </div>
    </div>
  );
}
