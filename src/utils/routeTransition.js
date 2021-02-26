import Tween, { Power0, Power2 } from 'gsap';
import {locoScroll} from "components/SmoothScroll";
import SplitTextJS from 'split-text-js';
import {scaleIn} from "utils/common/scaleIn";
import {fadeInContent} from "utils/common/fadeInContent";

export const routeIn = (pathname, node, appears) => {

    //init split title
    const title = document.querySelector('.split-title');
    let childSplit;
    let splitWords;
    if(!!title) {
        childSplit = new SplitTextJS(title, {
            type: 'lines'
        });
        splitWords = childSplit.words;
        Tween.set(splitWords, {
            yPercent: 50,
            opacity: 0,
        });
    }
    //end init split title


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
            delay: 0.5,
            ease: Power2.easeInOut,
            onComplete: () => {
                //display split title
                if(!!title) {
                    Tween.to(splitWords, {
                        duration: 1,
                        yPercent: 0,
                        opacity: 1,
                        ease: Power2.easeOut,
                        stagger: 0.1
                    });
                }
                scaleIn();
                fadeInContent();
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
                setTimeout(() => {
                    locoScroll.scrollTo(0, {
                        callback: () => locoScroll.update(),
                        duration: 100,
                        disableLerp: true
                    });
                }, 300);
            }
        });

};
