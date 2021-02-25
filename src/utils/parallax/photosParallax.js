import Tween, { Power4 } from 'gsap';

export const photoParallax = () => {

    const photos = document.querySelectorAll('.parallax img');

    for(let i = 0; i < photos.length; i++) {

        const photoTl = Tween.timeline({
            scrollTrigger: {
                trigger: photos[i],
                scroller: '#wrapper',
                scrub: false,
            }
        });

        photoTl
            .set(photos[i], {
                scale: 2,
                opacity: 0,
            })
            .fromTo(photos[i], {
                scale: 2,
                opacity: 0,
            }, {
                scale: 1,
                opacity: 1,
                duration: 4,
                ease: Power4.easeOut
            });

    }

};