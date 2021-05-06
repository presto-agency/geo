import { TimelineMax, Power0 } from "gsap/gsap-core";
import {locoScroll} from "../../components/SmoothScroll";

export const clientsMoving = () => {

    const list = document.querySelector('.clients-list.horizontal-moving');

    if(!!list && !list.classList.contains('is-moving')) {

        const listWidth = list.clientWidth;
        const rollingTween = new TimelineMax();

        rollingTween.to(list, {
            duration: 30,
            x: `-${listWidth / 2}`,
            ease: Power0.easeNone,
            // modifiers: {
            //     x: gsap.utils.unitize(x => parseFloat(x) % listWidth)
            // },
            repeat: -1,
        });

        locoScroll.on('scroll', (args) => {
            rollingTween.timeScale(Math.max(2, Math.abs(args.speed)));
        });

        list.classList.add('is-moving');
    }
};