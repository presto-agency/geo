import React, { useState } from 'react';
import ReactPlayer from "react-player";

const ProjectPageCarouselVideo = ({ video, data: { topImage }, baseUrl }) => {

    const [canPlay, setCanPlay] = useState(false);
    const [playing, setPlaying] = useState(false);

    const handleTogglePlaying = () => {
        setPlaying(!playing);
        setCanPlay(true);
    };

    return (
        <div className="projects-carousel-slide">
            <div className="project">
                <div className="project-preview">
                    <div className={`video ${canPlay ? 'loaded' : ''} ${playing ? 'playing' : ''} `}>
                        {
                            canPlay
                            ? (
                                <ReactPlayer
                                    url={video}
                                    playing={playing}
                                    playsinline={true}
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
                            ) : null
                        }
                        <div className="video-poster">
                            <img src={!!topImage ? baseUrl + topImage.formats.large.url : 'https://via.placeholder.com/300/?text=GEO project'} alt="" />
                        </div>
                        <div className={`video-btn ${playing ? '__pause' : '__play'}`} onClick={handleTogglePlaying} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectPageCarouselVideo;