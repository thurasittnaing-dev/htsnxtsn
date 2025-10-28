import React from 'react'
import { Spotlight } from './Spotlight'
import { SparklesCore } from './Sparkles';

function AnniText() {

    const anniversaryDate = new Date(2024, 2, 28); 
    const today = new Date();

    // Calculate difference in months and years
    const totalMonths =
        (today.getFullYear() - anniversaryDate.getFullYear()) * 12 +
        (today.getMonth() - anniversaryDate.getMonth());

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    return (
        <>
            <Spotlight 
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="white"
            />
        
            <h1 className="md:text-2xl text-xl lg:text-5xl font-bold text-center text-[#fff] relative z-20 mogra">
                <div>HAPPY {years > 0 && `${years} Year${years > 1 ? "s" : ""}`} {months > 0 && `& ${months} Month${months > 1 ? "s" : ""}`}</div> 
                <div>Anniversary</div>
            </h1>
            <div className="w-[40rem] h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        
                {/* Core component */}
                <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
                />
        
                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
        </>
  )
}

export default AnniText