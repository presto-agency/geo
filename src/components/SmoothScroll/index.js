import React, { useEffect } from 'react';
// import gsap from 'gsap';
import { useHistory } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
// import ScrollTrigger from 'gsap/ScrollTrigger';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import {servicesMove} from "../../utils/parallax/servicesMoving";

export let locoScroll;

const SmoothScroll = (props) => {

    const scrollRef = React.createRef();
    const history = useHistory();
    // gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        locoScroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            lerp: 0.08,
            getDirection: true,
            getSpeed: true,
            reloadOnContextChange: true,
            // tablet: {
            //     smooth: true
            // },
            // smartphone: {
            //     smooth: true
            // }
        });

        locoScroll.on('call', (func, dir, obj) => {
            servicesMove(obj);
        });

        history.listen(() => {
            setTimeout(() => {
                locoScroll.update();
            }, 100);
        });

    }, []);

    return (
        <div id="wrapper" ref={scrollRef}>
            {props.children}
        </div>
    )
};

export default SmoothScroll;