import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactPlayer from "react-player";
import {togglePlayingVideo} from "store/videos/actions";

const ProjectVideo = ({ project }) => {

    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);
    const [canPlay, setCanPlay] = useState(false);

    const handleTogglePlaying = () => {
        project.video.playing = !project.video.playing;
        dispatch(togglePlayingVideo(project));
        setCanPlay(true);
    };

    return (
        <div className={`video ${loaded ? 'loaded' : ''} ${project.video.playing ? 'playing' : ''} `}>
            {
                canPlay
                ? (
                    <ReactPlayer
                        url={project.video.url}
                        playing={project.video.playing}
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
                ) : (
                    <picture>
                        <source srcSet={project.previewWebp} type="image/webp" />
                        <source srcSet={project.preview} type="image/jpg" />
                        <img src={project.preview} alt="" />
                    </picture>
                )
            }
            <div className="video-poster">
                <img src={project.poster} alt={project.title} />
            </div>
            <div className={`video-btn ${project.video.playing ? '__pause' : '__play'}`} onClick={handleTogglePlaying} />
        </div>
    )
};

export default ProjectVideo;