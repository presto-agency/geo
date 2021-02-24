import React, { useState } from 'react';
import ReactPlayer from "react-player";

const ProjectPageCarouselSlide = ({ project }) => {

    const [loaded, setLoaded] = useState(false);
    const [playing, setPlaying] = useState(false);

    const handleTogglePlaying = () => {
        setPlaying(!playing);
    };

    return (
        <div className="projects-carousel-slide">
            <div className="project">
                <div className="project-preview">
                    { !!project.video.url
                        ? (
                            <div className={`video ${loaded ? 'loaded' : ''} ${playing ? 'playing' : ''} `}>
                                <ReactPlayer
                                    url={project.video.url}
                                    playing={playing}
                                    playsinline={true}
                                    onReady={() => setLoaded(true)}
                                    config={{
                                        youtube: {
                                            playerVars: {
                                                showinfo: 0
                                            }
                                        },
                                    }}
                                    width="100%"
                                    height="100%"
                                />
                                <div className="video-poster">
                                    <img src={project.poster} alt={project.title} />
                                </div>
                                <div className={`video-btn ${playing ? '__pause' : '__play'}`} onClick={handleTogglePlaying} />
                            </div>
                        )
                        : <img
                            src={project.preview}
                            alt={project.title} /> }
                </div>
            </div>
        </div>
    )
};

export default ProjectPageCarouselSlide;