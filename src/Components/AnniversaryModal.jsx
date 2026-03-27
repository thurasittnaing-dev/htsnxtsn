import React from 'react'

const AnniversaryModal = ({ open,anniDate, onClose }) => {
    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Confetti */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(40)].map((_, i) => (
                    <span
                        key={i}
                        className="confetti"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            backgroundColor: [
                                '#ffffff',
                                '#9ca3af',
                                '#6366f1',
                                '#ec4899'
                            ][i % 4],
                        }}
                    />
                ))}
            </div>

            {/* Modal */}
            <div className="relative z-10 bg-gradient-to-br from-black via-zinc-900 to-black border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.05)] p-6 md:p-10 max-w-lg w-[90%] text-center animate-scaleIn">
                
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/60 hover:text-white text-xl transition"
                >
                    ✕
                </button>

                <h2 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide">
                    🖤 Happy Anniversary 🖤
                </h2>

                {/* GIF */}
                <img
                    src="/tenor.gif"
                    alt="Anniversary"
                    className="mx-auto w-25 md:w-25 rounded-xl shadow-lg mb-4"
                />

                <p className="text-white/70 text-xs sm:text-sm md:text-md leading-relaxed text-justify">
                    Happy Birthday & Happy Anniversary ပါ ဆုဆုလေး...

                    ဒီနေ့မှာ ကိုကို အများကြီး မပြောချင်တော့ပါဘူး။ ကိုကို့ရဲ့ လုပ်ရပ်တွေကြောင့် ဆုဆုလေး မျက်ရည်ကျခဲ့ရတာတွေကို အစားထိုးဖို့ ကိုကို အလုပ်နဲ့ပဲ သက်သေပြချင်တော့လို့ပါ။

                    ဆုဆုလေး က ကိုကို့အပေါ်မှာ အများကြီး သည်းခံပေးခဲ့ရတာ သိပါတယ်။ အခု ကိုကို တောင်းဆိုချင်တာက... ကိုကို့ရဲ့ ပြင်ဆင်မှုကို စောင့်ကြည့်ပေးဖို့ပါပဲ။ အရင်ကထက် ပိုကောင်းတဲ့ လူတစ်ယောက်အနေနဲ့ ဆုဆုလေး ဘေးမှာ ရှိနေပေးချင်ပါတယ်။

                    ပြန်ချစ်တယ်လို့ ပြောစရာမလိုပါဘူး... ဆုဆုလေး စိတ်ချမ်းသာဖို့က ကိုကို့အတွက် ပထမဦးစားပေးပါပဲ။ အရမ်းချစ်တယ်နော်။
                </p>

                <button
                    onClick={onClose}
                    className="hidden md:inline-block mt-6 px-8 py-2 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 hover:scale-105 transition"
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default AnniversaryModal
