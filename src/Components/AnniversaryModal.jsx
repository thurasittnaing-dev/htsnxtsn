import React from 'react'

const AnniversaryModal = ({ open, onClose }) => {
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

                <p className="text-white/70 text-xs sm:text-sm md:text-md leading-relaxed">
                    ကိုကိုတို့တွေ 1 Year 10 months ပြည့်ပြီသဲသဲရေ 
                    Happy လို့တောင် မသုံးရဲတော့ဘူး ဘာတွေများပျော်နေရလို့လဲဆိုပြီး 
                    ပြန်ပြောတော့မယ့် သဲသဲ စကားကို ကိုကို ကြိုကြားနေလို့ 
                    ဒါကလည်း ကိုကိုက အမှားတွေ အများကြီးလုပ် သဲသဲ အပေါ်မှာ ဆိုးဝါးတဲ့ ကိစ္စတွေကြည့်လုပ်မိနေတာကိုး  
                    အာ့မလို့လည်း သဲသဲ အပေါ်မှားခဲ့တဲ့ အမှားတွေ အတွက် ပြင်နိုင်ဖို့ ကြိုးစားပေးသွားမယ်နော် သဲသဲအတွက် 
                    သဲသဲတော့ ပြင်မရတော့ဘူးဆိုပြီး ကိုကို့ကို စိတ်ထဲကနေ ပြောနေမှာပေါ့ ကိုကို သိပါတယ် 
                    ဒါပေမယ့်လည်းလေ ကိုကိုကြိုးစားချင်တယ် 
                    သဲသဲအတွက် စိတ်လုံခြုံမှုဆိုတဲ့ အရာကို ပြန်ပေးချင်တယ် 
                    ဘာလို့လဲဆိုတော့ ကိုကို သဲသဲ ကိုချစ်တယ် ဆိုတာ သေချာလို့ 
                    ရန်မဖြစ်အောင် ကိုကို အမြဲတန်းထိန်းမယ် 
                    ကိုကို့အတွက်နဲ့ သဲသဲ မငိုရတော့အောင် ကိုကို ကြိုးစားပေးမယ်နော် ... 
                    အရမ်း အရမ်း ချစ်တယ်  (သဲသဲက ပြန်ပြီး ချစ်တယ်လို့ ပြောစရာမလိုဘူးနော် ... )
                    အရမ်း အရမ်း လည်းတောင်းပန်ပါတယ် စကားလုံးတွေနဲ့ ကော လုပ်ရပ်တွေနဲ့ကောနဲ့ သဲသဲ အပေါ်မှာ ထိခိုက်စေမိခဲ့လို့ 
                    ဒီကိုကိုက ဆိုးသွမ်းနေတဲ့ လူတစ်ရောက် ဖြစ်ခဲ့လို့ တောင်းပန်ပါတယ်  
                    အရမ်းချစ်ရတဲ့ သူတစ်ယောက်အဖြစ်နဲ့ပြန်လာမှာမလို့ စောင့်ကြည့် သည်းခံပေးပါဦး ချစ်ရတဲ့ ရည်းစားဟောင်းလေးရေ...
                </p>

                <button
                    onClick={onClose}
                    className="mt-6 px-8 py-2 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 hover:scale-105 transition"
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default AnniversaryModal
