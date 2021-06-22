import React, { useEffect, Fragment } from 'react';
import Tween, { Power2 } from 'gsap';

const SplitTitle = (props) => {

    const title = props.children;

    useEffect(() => {
        if(!!props.children) {
            const words = document.querySelectorAll('.split-text-word');
            Tween.set(words, {
                yPercent: 50,
                opacity: 0,
                onComplete: () => {
                    setTimeout(() => {
                        Tween.to(words, {
                            duration: 1,
                            yPercent: 0,
                            opacity: 1,
                            ease: Power2.easeOut,
                            stagger: 0.1,
                            onComplete: () => {
                                const hiddenElements = document.querySelectorAll('.fade');
                                for(let i = 0; i < hiddenElements.length; i++) {
                                    hiddenElements[i].classList.remove('fade');
                                }
                            }
                        });
                    }, 200);
                }
            });
        }
    }, [props.children]);

    if(!!props.children) {
        return (
            <Fragment>
                {
                    title.split(' ').map((word, key) => {
                        return <span className="split-text-word" key={key}>{word}</span>
                    })
                }
            </Fragment>
        )
    }

    return <Fragment />
};

export default SplitTitle;