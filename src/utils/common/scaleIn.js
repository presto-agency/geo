import Tween, { Power4 } from "gsap";

export const scaleIn = () => {

    const banners = document.querySelectorAll('.scale img');

    for(let i = 0; i < banners.length; i++) {

        Tween.set(banners[i], {
            scale: 1.1,
            opacity: 0,
        });

        Tween.fromTo(banners[i], {
            scale: 1.1,
            opacity: 0,
        }, {
            // delay: 0.5,
            scale: 1,
            opacity: 1,
            duration: 4,
            ease: Power4.easeOut
        });

    }

};