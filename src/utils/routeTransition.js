import Tween, { Power2 } from 'gsap';
import {locoScroll} from "components/SmoothScroll";
import {scaleIn} from "utils/common/scaleIn";
import {fadeInContent} from "utils/common/fadeInContent";
import {photoParallax} from "utils/parallax/photosParallax";
import {contentParallax} from "utils/parallax/contentParallax";
import {scaleMapOnScroll} from "utils/parallax/scaleMapOnScroll";
import {groupParallax} from "utils/parallax/groupParallax";
import {horizontalMoving} from "utils/parallax/horizontalMoving";

export const routeIn = (pathname, node, appears) => {

    Tween.set(node, {
        opacity: 0,
    });

    Tween.fromTo(node,
        {
            opacity: 0,
        },
        {
            duration: 1,
            opacity: 1,
            ease: Power2.easeInOut,
            onComplete: () => {

                //animation on scroll
                photoParallax();
                contentParallax();
                scaleMapOnScroll();
                groupParallax();
                horizontalMoving();

                //animation on load page
                scaleIn();
                fadeInContent();
                locoScroll.update();
                //end display split title
            }
        }
    );
};

export const routeOut = (node) => {

    Tween.to(node,
        {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            duration: 0,
            opacity: 0,
            ease: 'none',
            onComplete: () => {
                if(window.innerWidth > 991) {
                    // setTimeout(() => {
                        locoScroll.scrollTo(0, {
                            duration: 5,
                            disableLerp: true,
                            callback: () => locoScroll.update()
                        });
                    // }, 300);
                } else {
                    window.scrollTo(0, 0);
                }
            }
        });

};
