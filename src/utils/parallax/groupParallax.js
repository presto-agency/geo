import gsap, { Power4 } from "gsap";

export const groupParallax = () => {

    if(!!document.querySelector('.group-scale') || !!document.querySelector('.group-fade')) {
        //for content
        const contentTL = gsap.timeline({
            scrollTrigger: {
                trigger: '.group-scale',
                scroller: '#wrapper',
                scrub: false,
            }
        });
        //for photos
        const scaleTL = gsap.timeline({
            scrollTrigger: {
                trigger: '.group-scale',
                scroller: '#wrapper',
                scrub: false,
            }
        });

        //content
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

        //photos
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
    }
};