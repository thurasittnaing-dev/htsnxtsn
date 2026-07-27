import React, { useEffect, useState } from "react";
import { Spotlight } from "./Spotlight";
import { SparklesCore } from "./Sparkles";
import AnniversaryModal from "./AnniversaryModal";
import "./anniversary.css";

function AnniText() {
  const anniversaryDate = new Date(2024, 2, 28);
  const today = new Date();
  const [open, setOpen] = useState(false);

  // Surprise entrance shortly after page load
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 900);
    return () => clearTimeout(timer);
  }, []);

  const totalMonths =
    (today.getFullYear() - anniversaryDate.getFullYear()) * 12 +
    (today.getMonth() - anniversaryDate.getMonth());

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const anniDate = [
    years > 0 ? `${years} Year${years > 1 ? "s" : ""}` : "",
    months > 0 ? `${months} Month${months > 1 ? "s" : ""}` : "",
  ]
    .filter(Boolean)
    .join(" & ");

  return (
    <>
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />

      <h1 className="mogra relative z-20 text-center text-xl font-bold text-[#fff] md:text-2xl lg:text-5xl">
        <div>HAPPY {anniDate}</div>
        <div>Anniversary</div>
      </h1>

      <div className="relative z-20 mt-6 mb-2 flex flex-col items-center">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="anni-gift-trigger group relative cursor-pointer border-0 bg-transparent p-0 outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#A684FF]/50"
          aria-label="Open anniversary surprise gift"
        >
          <MiniGift />
        </button>
        <p className="mt-3 text-xs tracking-wide text-white/45">
          Open your surprise ✨
        </p>
      </div>

      <div className="relative h-40 w-[40rem]">
        <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
        <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
        <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />

        <div className="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
      </div>

      <AnniversaryModal
        open={open}
        anniDate={anniDate}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

function MiniGift() {
  return (
    <div className="relative h-20 w-20">
      <div className="absolute top-1 left-1/2 z-20 h-6 w-[72px] -translate-x-1/2 rounded-t-sm bg-gradient-to-b from-[#FF7A9A] to-[#E8456A]">
        <div className="absolute top-0 left-1/2 h-full w-3 -translate-x-1/2 bg-gradient-to-b from-[#F5E6A8] to-[#E8C547]" />
        <div className="absolute -top-2 left-1/2 flex -translate-x-1/2 gap-0">
          <span className="h-3 w-4 rounded-full bg-[#E8C547] -rotate-12" />
          <span className="h-3 w-4 rounded-full bg-[#E8C547] rotate-12 -ml-1" />
        </div>
      </div>
      <div className="absolute bottom-1 left-1/2 z-10 h-12 w-16 -translate-x-1/2 overflow-hidden rounded-b-sm bg-gradient-to-b from-[#C45BFF] to-[#7B3FE4] shadow-lg shadow-[#7B3FE4]/40">
        <div className="absolute top-0 left-1/2 h-full w-3 -translate-x-1/2 bg-gradient-to-b from-[#F5E6A8] to-[#E8C547]" />
        <div className="absolute top-1/2 left-0 h-3 w-full -translate-y-1/2 bg-gradient-to-r from-[#F5E6A8] to-[#E8C547]" />
      </div>
      <span className="anni-sparkle absolute -top-1 -right-1 text-xs">✨</span>
    </div>
  );
}

export default AnniText;
