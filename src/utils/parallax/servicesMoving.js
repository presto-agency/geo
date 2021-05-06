import { TimelineMax, Power0 } from "gsap/gsap-core";
import {locoScroll} from "../../components/SmoothScroll";

export const servicesMove = () => {

    const services = document.querySelector('.services');
    if(!services.classList.contains('is-moving')) {
        const list = document.querySelectorAll('.list-scroll.horizontal-moving');
        const rollingTween1 = new TimelineMax();
        const rollingTween2 = new TimelineMax();
        const widthFirstList = list[0].clientWidth;
        const widthSecondList = list[1].clientWidth;

        rollingTween1.to(list[0], {
            duration: 300,
            x: `-=${widthFirstList / 2}`,
            ease: Power0.easeNone,
            repeat: -1,
        });

        rollingTween2.to(list[1], {
            duration: 400,
            x: `-=${widthSecondList / 2}`,
            ease: Power0.easeNone,
            repeat: -1,
        });

        locoScroll.on('scroll', (args) => {
            rollingTween1.timeScale(Math.max(2, Math.abs(args.speed)));
            rollingTween2.timeScale(Math.max(2, Math.abs(args.speed)));
        });

        services.classList.add('is-moving');
    }

};