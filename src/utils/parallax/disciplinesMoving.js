import gsap  from 'gsap/gsap-core';

export const disciplinesMoving = () => {

    const disciplinesSections = document.querySelectorAll('.image-slide');

    for(let i = 0; i < disciplinesSections.length; i++) {
        const sectionTl = gsap.timeline({
           scrollTrigger: {
               trigger: disciplinesSections[i],
               scroller: '#wrapper',
               start: 'top top',
               scrub: true
           }
        });

        sectionTl
            .to(disciplinesSections[i], {
                ease: 'none',
                y: ( window.innerHeight - 20 ),
            });
    }
};