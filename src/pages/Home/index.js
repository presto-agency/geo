import React from 'react';
import MetaTags from 'react-meta-tags';
import Hero from "./Hero";
import AboutDetail from "./About";
import Clients from "./Clients";
import Disciplines from "./Disciplines";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import FootBanner  from "components/FootBanner";
import logo from "assets/images/logo.png";

const HomePage = () => {
    return (
        <div className="page">
            <MetaTags>
                <title>Global Engineering Office</title>
                <meta name="description" content="Global Engineering Office" />
                <meta property="og:title" content="Global Engineering Office" />
                <meta property="og:image" content={logo} />
            </MetaTags>
            <Hero />
            <AboutDetail />
            <Clients />
            <Disciplines/>
            <Services />
            <Projects />
            <Contact />
            <FootBanner src="https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
        </div>
    )
};

export default HomePage;