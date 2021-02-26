import { TimelineLite, Power4 } from "gsap";

export const groupParallax = () => {
    const scaleTL = new TimelineLite();
    const contentTL = new TimelineLite();

    scaleTL.staggerFromTo('.group-scale', 1,
        {
            opacity: 0,
            scale: 1.2,
            y: 100
        },
        {
            opacity: 1,
            scale: 1,
            y: 0,
            delay: 0.5,
            ease: Power4.easeOut
        },
        0.3);

    contentTL.staggerFromTo('.group-fade', 1,
        {
            opacity: 0,
            y: 50
        },
        {
            opacity: 1,
            y: 0,
            delay: 0.6,
            ease: Power4.easeOut
        },
        0.2);

};