import React, { useState } from 'react';
import ReactPlayer from "react-player";

const ProjectVideo = ({ project, baseUrl }) => {

    const [canPlay, setCanPlay] = useState(false);
    const [playing, setPlaying] = useState(false);

    const handleTogglePlaying = () => {
        setPlaying(!playing);
        setCanPlay(true);
    };

    return (
        <div className={`video ${canPlay ? 'loaded' : ''} ${playing ? 'playing' : ''}`}>
            {
                canPlay
                ? (
                    <ReactPlayer
                        url={project.youtubeVideoLink}
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
                ) : (
                    <img src={!!project.topImage ? baseUrl + project.topImage.formats.large.url : 'https://via.placeholder.com/300/?text=GEO project'} alt={project.name} />
                )
            }
            <div className="video-poster">
                <img src={!!project.topImage ? baseUrl + project.topImage.formats.large.url : 'https://via.placeholder.com/300/?text=GEO project'} alt={project.name} />
            </div>
            <div className={`video-btn ${playing ? '__pause' : '__play'}`} onClick={handleTogglePlaying} />
        </div>
    )
};

export default ProjectVideo;