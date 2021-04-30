import gsap, { TimelineMax, Power0 } from "gsap/gsap-core";

export const servicesMove = (object) => {

    const services = document.querySelector('.services');
    if(!services.classList.contains('is-moving')) {
        const list = object.el.querySelectorAll('.horizontal-moving');
        const rollingTween1 = new TimelineMax();
        const rollingTween2 = new TimelineMax();
        const widthFirstList = list[0].clientWidth;
        const widthSecondList = list[1].clientWidth;

        rollingTween1.to(list[0], {
            duration: 300,
            x: `-=${widthFirstList}`,
            ease: Power0.easeNone,
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % widthFirstList)
            },
            repeat: -1,
        });

        rollingTween2.to(list[1], {
            duration: 400,
            x: `-=${widthSecondList}`,
            ease: Power0.easeNone,
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % widthSecondList)
            },
            repeat: -1,
        });
        services.classList.add('is-moving');
    }

};