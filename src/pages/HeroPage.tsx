import { useLayoutEffect, useRef } from "react"
import { colors } from "../utilities/colours"
import gsap from "gsap";

export const HeroPage = () => {

    const root  = useRef(null);
    const tl = useRef<GSAPTimeline | null>(null);
    const greeting = ["H", "e", "l", "l", "o"];

    useLayoutEffect(() => {
        if(root.current) {
            const element = root.current;
            const context = gsap.context(() =>{
                tl.current = gsap.timeline({default: {duration: 0.5}})
                .from(".letter", {y: -20, opacity: 0, stagger: 0.1, ease: "power2.out"})
                .from(".hero", {y: 8000, opacity: 0,ease: "expo", duration: 1} ,"<1")
            },element)
            return () => context.revert();  
        }
    },[]) 
    return (
        <div ref={root} className={colors.bgSecondary+" h-dvh flex items-center justify-center  relative"}>
            <div className="w-sm h-32 flex items-center justify-center">
                {greeting.map((letter, index) => (
                    <span key={index} className={colors.textOnAccent+" letter text-6xl"}>{letter}</span>
                ))}
            </div>
            <div className={colors.bgPrimary+" hero h-full w-full absolute"}>
                hiiii
            </div>
        </div>
    )
}