import Tween, { Power4 } from 'gsap';

export const scaleMapOnScroll = () => {

    const mapVector = document.querySelector('svg');

    const mapTL = Tween.timeline({
        scrollTrigger: {
            trigger: mapVector,
            scroller: '#wrapper',
            scrub: false,
        }
    });

    mapTL
        .set(mapVector, {
            scale: 1.2
        })
        .fromTo(mapVector,
        {
            scale: 1.2
        },
        {
            scale: 1,
            duration: 4,
            ease: Power4.easeOut
        });

};