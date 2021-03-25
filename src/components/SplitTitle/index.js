import React, { useEffect } from 'react';
import Tween, { Power2 } from 'gsap';
import SplitTextJS from 'split-text-js';

const SplitTitle = (props) => {

    const title = React.createRef();

    useEffect(() => {

        const titleText = title.current.querySelector('.split-title');

        let childSplit;
        let splitWords;
            childSplit = new SplitTextJS(titleText, {
                type: 'lines'
            });
            splitWords = childSplit.words;
            Tween.set(splitWords, {
                yPercent: 50,
                opacity: 0,
                onComplete: () => {
                    setTimeout(() => {
                        Tween.to(splitWords, {
                            duration: 1,
                            yPercent: 0,
                            opacity: 1,
                            ease: Power2.easeOut,
                            stagger: 0.1
                        });
                    }, 500);
                }
            });

    }, [title]);

    return (
        <div ref={title}>{props.children}</div>
    )
};

export default SplitTitle;