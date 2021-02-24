import Tween, { Power4 } from 'gsap';
import {locoScroll} from "components/SmoothScroll";

export const routeIn = (pathname, node, appears) => {
    Tween.fromTo(node,
        {
            opacity: 0,
        },
        {
            duration: 1,
            opacity: 1,
            delay: 0.5,
            ease: Power4.easeOut,
            onComplete: () => {
                locoScroll.update();
            }
        }
    );
};

export const routeOut = (node) => {

    Tween.set(node,
        {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            onComplete: () => {
                locoScroll.scrollTo(0, { duration: 100 });
            }
        });
    Tween.to(node, {
        opacity: 0,
        duration: 0.5,
        delay: 0.1,
        ease: Power4.easeOut,
    });

};
