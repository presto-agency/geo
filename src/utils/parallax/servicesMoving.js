import gsap, { TimelineMax, Power1 } from "gsap/gsap-core";
import {locoScroll} from "components/SmoothScroll";

export const servicesMove = (obj) => {

    // const list = obj.el.querySelectorAll('.list-scroll');
    //
    // const titleTl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: list[0],
    //         scroller: '#wrapper',
    //         scrub: false,
    //     }
    // }).to(list[0], {
    //     xPercent: -100,
    //     duration: 200,
    //     // paused: true
    // });


    // const rollingTween2 = new TimelineMax();
    // const width = list[0].clientWidth;
    //
    // rollingTween1.to(list[0], {
    //     duration: 100,
    //     x: `-=${width}`,
    //     ease: Power1.easeOut,
    //     modifiers: {
    //         x: gsap.utils.unitize(x => parseFloat(x) % width)
    //     },
    //     repeat: -1,
    // });
    //
    // rollingTween2.to(list[1], {
    //     duration: 130,
    //     x: `-=${width}`,
    //     ease: Power1.easeOut,
    //     modifiers: {
    //         x: gsap.utils.unitize(x => parseFloat(x) % width)
    //     },
    //     repeat: -1,
    // });
    //
    // locoScroll.on('scroll', (obj) => {
    //
    //     let speed = Math.abs(parseInt(obj.speed)) || 1;
    //     rollingTween1.timeScale(Math.min(4, speed));
    //     rollingTween2.timeScale(Math.min(3, speed));
    //
    //     if(obj.direction === 'up') {
    //         rollingTween1.reverse();
    //         rollingTween2.reverse();
    //     }
    //
    // });

};