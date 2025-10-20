import { useLayoutEffect, useRef } from "react";
import { colors } from "../../utilities/colours";
import gsap from "gsap";

export const NavBar = () => {
    const links = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "About",
            url: "/about",
        },
        {
            name: "Works",
            url: "/works",
        },
        {
            name: "Contact",
            url: "/contact",
        },
    ]

    const nav = useRef(null);
    useLayoutEffect(() => {
        if (nav.current) {
            // const element = nav.current;
            const context = gsap.context(() => {
                gsap.from('.links', { opacity: 0, y: -20, stagger: 0.2, ease: "power1.out", duration: 0.2, delay: 2.5 })
            }, nav);
            return () => context.revert()
        }
    }, [])
    return (
        <section ref={nav} className="bg-transparent flex justify-center w-full fixed top-0 p-3 z-10">
            {
                links.map(link => (
                    <a href={link.url} className={colors.textPrimary+` links px-3`}>{link.name}</a>
                ))
            }
        </section>
    );
};