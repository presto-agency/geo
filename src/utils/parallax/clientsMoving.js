import gsap, { TimelineMax, Power0 } from "gsap/gsap-core";

export const clientsMoving = (object) => {

    const clients = document.querySelector('.clients');
    const list = object.el.querySelector('.horizontal-moving');
    const rollingTween = new TimelineMax();
    const widthList = list.clientWidth;

    // if(!clients.classList.contains('is-moving')) {

        rollingTween.to(list, {
            duration: 10,
            x: `-=${widthList}`,
            ease: Power0.easeNone,
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % widthList)
            },
            repeat: -1,
        });

        // clients.classList.add('is-moving');
    // }

    console.log('init clients moving');
};