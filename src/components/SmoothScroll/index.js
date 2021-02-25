import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useHistory, useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import ScrollTrigger from 'gsap/ScrollTrigger';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import {servicesMove} from "utils/parallax/servicesMoving";
import {disciplinesMoving} from "utils/parallax/disciplinesMoving";
import {photoParallax} from "utils/parallax/photosParallax";

export let locoScroll;

const SmoothScroll = (props) => {

    const scrollRef = React.createRef();
    const history = useHistory();
    const { pathname } = useLocation();
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        locoScroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            lerp: 0.08,
            getDirection: true,
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
            disciplinesMoving();
        });

        history.listen(() => {
            setTimeout(() => {
                locoScroll.update();
            }, 100);
        });

        locoScroll.on('scroll', ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(scrollRef.current, {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
            },
            pinType: scrollRef.current.style.transform ? "transform" : "fixed"
        });

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();

    }, []);

    useEffect(() => {

        //photos parallax on scroll
        photoParallax();

    }, [pathname]);

    return (
        <div id="wrapper" ref={scrollRef}>
            {props.children}
        </div>
    )
};

export default SmoothScroll;