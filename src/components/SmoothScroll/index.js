import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import gsap from 'gsap';
import { useHistory, useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import ScrollTrigger from 'gsap/ScrollTrigger';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import {servicesMove} from "utils/parallax/servicesMoving";
import {disciplinesMoving} from "utils/parallax/disciplinesMoving";
import {showInViewport} from "store/about/actions";

export let locoScroll;

const SmoothScroll = (props) => {

    const dispatch = useDispatch();
    const { isVisible } = useSelector(state => state.about);
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
            switch (func) {
                case 'services-moving':
                    servicesMove(obj, dir);
                    return true;
                case 'disciplines-moving':
                    disciplinesMoving();
                    return true;
                case 'about-values':
                    if(!isVisible) {
                        dispatch(showInViewport(true));
                    }
                    return true;
            }
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
        //on init page
        dispatch(showInViewport(false));
    }, [pathname]);

    return (
        <div id="wrapper" ref={scrollRef}>
            {props.children}
        </div>
    )
};

export default SmoothScroll;