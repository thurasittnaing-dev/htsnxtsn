import { useEffect } from "react";
import "./../texteffect.css"; 
import thelthel from "./../assets/thelthel.jpg";
import koko from "./../assets/koko.jpg";
import Hearts from "../Components/Hearts";
import Avater from "../Components/Avater";
import AnniDate from "../Components/AnniDate";
import DaysCounter from "../Components/DayCounter";

const About = () => {

    useEffect(() => {
        const text = "HTSNXTSN";
        const container = document.getElementById("text-container");
        const cursor = document.getElementById("cursor");

        if (!container || !cursor) return;

        container.innerHTML = "";
        text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.classList.add("letter");
        container.appendChild(span);
        });

        const letters = document.querySelectorAll(".letter");
        const animationContainer = document.getElementById("animation-container");

        function lerp(start, end, amount) {
        return (1 - amount) * start + amount * end;
        }

        const handleMouseMove = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        letters.forEach((letter) => {
            const rect = letter.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const distanceX = mouseX - centerX;
            const distanceY = mouseY - centerY;
            const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
            const maxDistance = 200;

            if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            const moveX = lerp(0, distanceX, force * 0.5);
            const moveY = lerp(0, distanceY, force * 0.5);
            letter.style.transform = `translate(${moveX}px, ${moveY}px)`;
            letter.style.transitionDuration = "0.2s";
            } else {
            letter.style.transform = "translate(0, 0)";
            letter.style.transitionDuration = "0.5s";
            }
        });

        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
        };

        const handleMouseLeave = () => {
        letters.forEach((letter) => {
            letter.style.transform = "translate(0, 0)";
            letter.style.transitionDuration = "0.5s";
        });
        };

        animationContainer.addEventListener("mousemove", handleMouseMove);
        animationContainer.addEventListener("mouseleave", handleMouseLeave);

        return () => {
        animationContainer.removeEventListener("mousemove", handleMouseMove);
        animationContainer.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <>
           <Hearts />
           <div className="flex flex-col md:flex-row justify-center items-center md:h-screen">
                <div className="w-full md:w-1/2 mt-10 md:mt-0">
                    <div id="animation-container" className="relative flex flex-col justify-center items-center">
                        <div id="text-container" className="text-6xl lg:text-9xl font-bold mogra select-none text-[#DE3163]"></div>
                        <div id="cursor"></div>
                        <AnniDate />
                        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mt-8 mb-10 md:mb-0">
                            <Avater name="Hsu Thitsar Naing" nickname='Thel"' image={thelthel} />
                            <Avater name="Thura Sitt Naing" nickname='KoKo"' image={koko} />
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-4 text-center mt-2 md:mt-0">
                  <DaysCounter />
                </div>
            </div>

        </>
    );
};

export default About;
