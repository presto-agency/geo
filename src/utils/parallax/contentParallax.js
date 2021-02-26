import Tween, { Power4 } from 'gsap';

export const contentParallax = () => {

    const elements = document.querySelectorAll('.fade-on-scroll');

    for(let i = 0; i < elements.length; i++) {

        const elementTl = Tween.timeline({
            scrollTrigger: {
                trigger: elements[i],
                scroller: '#wrapper',
                scrub: false,
            }
        });

        elementTl
            .set(elements[i], {
                y: 100,
                opacity: 0,
            })
            .fromTo(elements[i], {
                y: 100,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                duration: 2,
                ease: Power4.easeOut
            });

    }

};