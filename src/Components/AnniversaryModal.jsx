import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const confettiColors = [
  "#FF4B6E",
  "#FF85A1",
  "#A684FF",
  "#FFD6E8",
  "#FFFFFF",
  "#FBBF24",
  "#F472B6",
];

const AnniversaryModal = ({ open, anniDate, onClose }) => {
  const [stage, setStage] = useState("gift"); // gift | opening | surprise | message

  useEffect(() => {
    if (!open) {
      setStage("gift");
      return;
    }
    setStage("gift");
  }, [open]);

  useEffect(() => {
    if (!open) return;

    if (stage === "opening") {
      const t = setTimeout(() => setStage("surprise"), 1100);
      return () => clearTimeout(t);
    }

    if (stage === "surprise") {
      const t = setTimeout(() => setStage("message"), 2200);
      return () => clearTimeout(t);
    }
  }, [stage, open]);

  const handleOpenGift = () => {
    if (stage !== "gift") return;
    setStage("opening");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <motion.div
            className="absolute inset-0 bg-[#0a0612]/92 backdrop-blur-md"
            onClick={stage === "message" ? onClose : undefined}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />

          {/* Soft glow atmosphere */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#A684FF]/20 blur-[100px]" />
            <div className="absolute left-1/3 top-1/2 h-56 w-56 rounded-full bg-[#FF4B6E]/15 blur-[90px]" />
          </div>

          {/* Confetti burst after open */}
          {(stage === "opening" || stage === "surprise" || stage === "message") && (
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {[...Array(48)].map((_, i) => (
                <span
                  key={i}
                  className="anni-confetti"
                  style={{
                    left: `${8 + (i * 1.85) % 84}%`,
                    animationDelay: `${(i % 12) * 0.08}s`,
                    animationDuration: `${2.2 + (i % 5) * 0.35}s`,
                    backgroundColor: confettiColors[i % confettiColors.length],
                    width: `${6 + (i % 4)}px`,
                    height: `${8 + (i % 5)}px`,
                    borderRadius: i % 3 === 0 ? "50%" : "2px",
                  }}
                />
              ))}
            </div>
          )}

          <div className="relative z-10 flex w-[92%] max-w-lg flex-col items-center px-2">
            <AnimatePresence mode="wait">
              {(stage === "gift" || stage === "opening") && (
                <motion.div
                  key="gift-stage"
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.85, y: 24 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.2, y: -40 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                >
                  <p className="mb-6 text-center text-sm tracking-[0.25em] text-white/50 uppercase">
                    A little surprise for you
                  </p>

                  <button
                    type="button"
                    onClick={handleOpenGift}
                    className="group relative cursor-pointer border-0 bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-[#A684FF]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                    aria-label="Open anniversary gift"
                    disabled={stage !== "gift"}
                  >
                    <GiftBox opening={stage === "opening"} />
                  </button>

                  {stage === "gift" && (
                    <motion.p
                      className="mt-8 text-sm text-white/55"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2.2, repeat: Infinity }}
                    >
                      Tap the gift to open
                    </motion.p>
                  )}
                </motion.div>
              )}

              {stage === "surprise" && (
                <motion.div
                  key="surprise-stage"
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                >
                  <motion.span
                    className="mb-3 text-xs tracking-[0.4em] text-[#FF85A1] uppercase"
                    initial={{ opacity: 0, letterSpacing: "0.8em" }}
                    animate={{ opacity: 1, letterSpacing: "0.4em" }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                  >
                    Surprise
                  </motion.span>

                  <motion.h2
                    className="mogra text-4xl leading-tight text-white md:text-6xl"
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: 0.25, duration: 0.7 }}
                  >
                    Happy
                    <br />
                    <span className="bg-gradient-to-r from-[#FF85A1] via-[#A684FF] to-[#FFD6E8] bg-clip-text text-transparent">
                      Anniversary
                    </span>
                  </motion.h2>

                  {anniDate && (
                    <motion.p
                      className="mt-4 text-lg text-white/70"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      {anniDate}
                    </motion.p>
                  )}

                  <motion.div
                    className="mt-6 text-4xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.3, 1] }}
                    transition={{ delay: 0.9, duration: 0.55 }}
                  >
                    💕
                  </motion.div>
                </motion.div>
              )}

              {stage === "message" && (
                <motion.div
                  key="message-stage"
                  className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#16101f]/95 via-[#0f0b16]/98 to-black p-6 text-center shadow-[0_0_60px_rgba(166,132,255,0.12)] md:p-9"
                  initial={{ opacity: 0, y: 40, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 220, damping: 24 }}
                >
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-lg text-white/45 transition hover:text-white"
                    aria-label="Close"
                  >
                    ✕
                  </button>

                  <motion.div
                    className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#A684FF]/15 text-2xl"
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                  >
                    🎁
                  </motion.div>

                  <h2 className="mogra mb-1 text-2xl text-white md:text-3xl">
                    Happy Anniversary
                  </h2>
                  {anniDate && (
                    <p className="mb-4 text-sm tracking-wide text-[#A684FF]">
                      {anniDate}
                    </p>
                  )}

                  <div className="mx-auto mt-2 max-w-sm space-y-4 rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-5 text-center">
                    <p className="text-base font-medium leading-relaxed text-[#FFD6E8] sm:text-lg">
                      Happy Anniversary ပါ သဲသဲလေး...
                    </p>

                    <div className="mx-auto h-px w-12 bg-gradient-to-r from-transparent via-[#A684FF]/60 to-transparent" />

                    <p className="text-sm leading-7 text-white/65 sm:text-[15px]">
                      ကိုကို အရမ်းအလုပ်ရှုပ်နေလို့
                      <br />
                      အရှည်ကြီးတွေ မရေးတော့ဘူးနော်
                    </p>

                    <p className="text-base font-medium tracking-wide text-[#FF85A1] sm:text-lg">
                      အရမ်းချစ်တယ်နော် 💕
                    </p>

                    <p className="text-sm leading-relaxed text-white/55 sm:text-[15px]">
                      အီးတုန်း အကြီးကြီး စားနိုင်ပါစေနော်။
                    </p>
                  </div>

                  <button
                    onClick={onClose}
                    className="mt-6 inline-flex rounded-full bg-gradient-to-r from-[#FF85A1] to-[#A684FF] px-8 py-2.5 text-sm font-semibold text-white transition hover:scale-105 hover:brightness-110"
                  >
                    Close with love 💕
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function GiftBox({ opening }) {
  return (
    <div
      className={`anni-gift relative h-40 w-40 md:h-48 md:w-48 ${
        opening ? "anni-gift--opening" : "anni-gift--idle"
      }`}
    >
      {/* Soft ground shadow */}
      <div className="absolute bottom-1 left-1/2 h-3 w-28 -translate-x-1/2 rounded-full bg-black/40 blur-md md:w-32" />

      {/* Lid */}
      <div className="anni-gift__lid absolute top-2 left-1/2 z-20 h-[28%] w-[88%] -translate-x-1/2">
        <div className="h-full w-full rounded-t-md bg-gradient-to-b from-[#FF7A9A] to-[#E8456A] shadow-lg">
          <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-md bg-white/15" />
        </div>
        {/* Vertical ribbon on lid */}
        <div className="absolute top-0 left-1/2 z-10 h-full w-[18%] -translate-x-1/2 bg-gradient-to-b from-[#F5E6A8] to-[#E8C547]" />
        {/* Bow */}
        <div className="anni-gift__bow absolute -top-5 left-1/2 z-30 -translate-x-1/2">
          <span className="anni-gift__bow-left" />
          <span className="anni-gift__bow-right" />
          <span className="anni-gift__bow-knot" />
        </div>
      </div>

      {/* Box body */}
      <div className="anni-gift__body absolute bottom-3 left-1/2 z-10 h-[58%] w-[80%] -translate-x-1/2 overflow-hidden rounded-b-md bg-gradient-to-b from-[#C45BFF] to-[#7B3FE4] shadow-[0_12px_30px_rgba(123,63,228,0.45)]">
        <div className="absolute inset-x-0 top-0 h-1/3 bg-white/10" />
        <div className="absolute top-0 left-1/2 z-10 h-full w-[18%] -translate-x-1/2 bg-gradient-to-b from-[#F5E6A8] to-[#E8C547]" />
        <div className="absolute top-1/2 left-0 z-10 h-[18%] w-full -translate-y-1/2 bg-gradient-to-r from-[#F5E6A8] to-[#E8C547]" />
      </div>

      {/* Sparkle hints when idle */}
      {!opening && (
        <>
          <span className="anni-sparkle absolute top-0 right-2 text-lg">✨</span>
          <span className="anni-sparkle anni-sparkle--delay absolute bottom-10 left-0 text-sm">
            ✨
          </span>
        </>
      )}

      {/* Burst hearts on open */}
      {opening && (
        <>
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="anni-burst-heart absolute top-1/2 left-1/2 text-xl"
              style={{
                "--tx": `${Math.cos((i / 8) * Math.PI * 2) * 90}px`,
                "--ty": `${Math.sin((i / 8) * Math.PI * 2) * 70 - 20}px`,
                animationDelay: `${i * 0.04}s`,
              }}
            >
              {i % 2 === 0 ? "💖" : "💗"}
            </span>
          ))}
        </>
      )}
    </div>
  );
}

export default AnniversaryModal;
