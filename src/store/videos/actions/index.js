import {TOGGLE_PLAYING_VIDEO,STOP_PLAYING_ALL_VIDEOS} from "store/constants";

export const togglePlayingVideo = (project) => ({
    type: TOGGLE_PLAYING_VIDEO,
    payload: project,
});

export const stopPlayingAllVideos = (projects) => ({
    type: STOP_PLAYING_ALL_VIDEOS,
    payload: projects
});