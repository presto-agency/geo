import React, { useState } from 'react';
import ReactPlayer from "react-player";

const ProjectVideo = ({ project, baseUrl, togglePlaying }) => {

    const [canPlay, setCanPlay] = useState(false);

    const handleTogglePlaying = () => {
        project.youtubeVideoPlaying = !project.youtubeVideoPlaying;
        togglePlaying(project);
        setCanPlay(true);
    };

    return (
        <div className="video loaded playing">
            {
                canPlay
                ? (
                    <ReactPlayer
                        url={project.youtubeVideoLink}
                        playing={project.youtubeVideoPlaying}
                        playsinline={true}
                        // onReady={() => setPlaying(true)}
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
                    <img src={baseUrl + project.topImage.formats.large.url || ''} alt={project.name} />
                )
            }
            <div className="video-poster">
                <img src={baseUrl + project.topImage.formats.large.url || ''} alt={project.name} />
            </div>
            <div className="video-btn" onClick={handleTogglePlaying} />
        </div>
    )
};

export default ProjectVideo;