import gsap from 'gsap';

export const horizontalMoving = () => {

    const rows = document.querySelectorAll('.horizontal-moving');

    // if(window.innerWidth < 992) {
    //     for (let i = 0; i < rows.length; i++) {
    //
    //         const rowTL = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: rows[i],
    //                 scroller: '#wrapper',
    //                 scrub: true,
    //             }
    //         });
    //         rowTL
    //             .set(rows[i], {
    //                 x: '100vw',
    //             })
    //             .fromTo(rows[i], {
    //                 x: '100vw',
    //             }, {
    //                 x: '-100vw',
    //             });
    //
    //     }
    // }

};