import { useLayoutEffect, useRef } from "react";
import { colors } from "../../utilities/colours";
import gsap from "gsap";
import TextPressure from "../../components/textPressure/TextPressure";

export const HeroPage = () => {
    const root = useRef(null);
    const tl = useRef<GSAPTimeline | null>(null);
    const greeting = ["H", "e", "l", "l", "o"];

    useLayoutEffect(() => {
        if (root.current) {
            const element = root.current;
            const context = gsap.context(() => {
                 tl.current = gsap.timeline({ defaults: { duration: 0.5, ease: "power2.out" } })
        .from(".letter", {
          y: -20,
          opacity: 0,
          stagger: 0.1,
        })
        .from(".hero", {
          y: 800,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
        })
        .from(".title", {
          opacity: 0,
          y: -50,
          duration: 0.5,
          ease: "expo.out",
        })
         .from(".header", {
          x: -50,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
        },"<0.1")
        .from(".subtitle", {
          opacity: 0,
          x: 50,
          duration: 0.5,
          ease: "expo.out",
         
        },"<0.1");
                    
            }, element);
            return () => context.revert();
        }
    }, []);
    return (
        <div
            ref={root}
            className={
                colors.bgSecondary + " h-dvh flex items-center justify-center  relative"
            }
        >
            <div className="w-sm h-32 flex items-center justify-center ">
                {greeting.map((letter, index) => (
                    <p
                        key={index}
                        className={colors.textOnAccent + " letter text-6xl"}
                    >
                        {letter}
                    </p>
                ))}
            </div>
            <div className={colors.bgPrimary + " hero h-full w-full absolute overflow-hidden"}>
                <div className=" h-full flex flex-col justify-center ">
                    <div className=" grid ">
                        <h1 className={colors.textOnAccent + " header pl-2 text-2xl"}>The Protfolio of </h1>
                       <div className="title ">
                         <TextPressure
                            text="ChanduSagar"
                            flex={true}
                            alpha={false}
                            stroke={false}
                            width={true}
                            weight={true}
                            italic={true}
                            textColor="#ffffff"
                            strokeColor="#ff0000"
                            minFontSize={36}
                        />
                       </div>
                        <span className={colors.textPrimary + ` subtitle pr-5 w-5xl mt-5 justify-self-end `}>
                             A Full-Stack Developer passionate about creating modern and responsive web applications. I work with Angular, React, Spring Boot, and MySQL to build efficient, scalable, and visually appealing solutions. I enjoy combining clean design with strong functionality to deliver smooth user experiences. Every project helps me refine my skills and stay current with evolving technologies. Curious and creative by nature, I’m always exploring new ways to make the web better.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
