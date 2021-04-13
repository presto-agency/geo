import Tween, { Power4 } from "gsap";

export const fadeInContent = () => {

    const elements = document.querySelectorAll('.fade');

    for(let i = 0; i < elements.length; i++) {

        Tween.set(elements[i], {
            opacity: 0,
            y: 20
        });

        Tween.fromTo(elements[i], {
            opacity: 0,
        }, {
            // delay: 0.2,
            y: 0,
            opacity: 1,
            duration: 2,
            ease: Power4.easeOut
        });

    }

};