import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import ScrollTrigger from 'gsap/ScrollTrigger';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import {servicesMove} from "utils/parallax/servicesMoving";
import {disciplinesMoving} from "utils/parallax/disciplinesMoving";
import {clientsMoving} from "utils/parallax/clientsMoving";
import {showInViewport} from "store/about/actions";

export let locoScroll;

const SmoothScroll = (props) => {

    const dispatch = useDispatch();
    const { isVisible } = useSelector(state => state.about);
    const scrollRef = React.createRef();
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        locoScroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            lerp: 0.08,
            getDirection: true,
            getSpeed: true,
            reloadOnContextChange: true,
            tablet: {
                smooth: true,
                breakpoint: 992
            },
            smartphone: {
                smooth: false
            }
        });

        locoScroll.on('call', (func, dir, obj) => {
            switch (func) {
                case 'services-moving':
                    servicesMove(obj);
                    return false;
                case 'disciplines-moving':
                    disciplinesMoving(obj);
                    return false;
                case 'about-values':
                    if(!isVisible && dir === 'enter') {
                        dispatch(showInViewport(true));
                    }
                case 'clients-moving':
                    clientsMoving(obj);
                    return false;
            }
        });

        // history.listen(() => {
        //     //on init page
        //     // dispatch(showInViewport(false));
        //
        //     setTimeout(() => {
        //         locoScroll.update();
        //     }, 100);
        // });

        locoScroll.on('scroll', ScrollTrigger.update);

        // locoScroll.on('scroll', func => {
        //    console.log(func);
        // });

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

    }, [dispatch]);

    return (
        <div id="wrapper" ref={scrollRef}>
            {props.children}
        </div>
    )
};

export default SmoothScroll;