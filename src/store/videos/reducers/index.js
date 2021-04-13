import {STOP_PLAYING_ALL_VIDEOS, TOGGLE_PLAYING_VIDEO} from "store/constants";

const initialState = {
    loading: false,
    data: [
        {
            id: 0,
            preview: 'https://i.ytimg.com/vi/4jSv9oFM5m0/maxresdefault.jpg',
            previewWebp: 'https://i.ytimg.com/vi_webp/4jSv9oFM5m0/maxresdefault.webp',
            video: {
                url: 'https://youtu.be/4jSv9oFM5m0',
                playing: false
            }
        },
        {
            id: 1,
            preview: 'https://i.ytimg.com/vi/Lth1FAkLwhY/maxresdefault.jpg',
            previewWebp: 'https://i.ytimg.com/vi_webp/Lth1FAkLwhY/maxresdefault.webp',
            video: {
                url: 'https://youtu.be/Lth1FAkLwhY',
                playing: false
            }
        },
        {
            id: 2,
            preview: 'https://i.ytimg.com/vi/c7TOuMl-Ags/maxresdefault.jpg',
            previewWebp: 'https://i.ytimg.com/vi_webp/c7TOuMl-Ags/maxresdefault.webp',
            video: {
                url: 'https://youtu.be/c7TOuMl-Ags',
                playing: false
            }
        },
        {
            id: 3,
            preview: 'https://i.ytimg.com/vi/BjZ0JVD4HWw/sddefault.jpg',
            previewWebp: 'https://i.ytimg.com/vi_webp/BjZ0JVD4HWw/sddefault.webp',
            video: {
                url: 'https://youtu.be/BjZ0JVD4HWw',
                playing: false
            }
        },
        {
            id: 4,
            preview: 'https://i.ytimg.com/vi/bqwPMbhcZ5Q/sddefault.jpg',
            previewWebp: 'https://i.ytimg.com/vi_webp/bqwPMbhcZ5Q/sddefault.webp',
            video: {
                url: 'https://youtu.be/bqwPMbhcZ5Q',
                playing: false
            }
        },
        {
            id: 5,
            preview: 'https://i.ytimg.com/vi/g5_d08lJ53w/sddefault.jpg',
            previewWebp: 'https://i.ytimg.com/vi_webp/g5_d08lJ53w/sddefault.webp',
            video: {
                url: 'https://youtu.be/g5_d08lJ53w',
                playing: false
            }
        },
        {
            id: 6,
            preview: 'https://i.ytimg.com/vi/TrgM8Mbh-p8/maxresdefault.jpg',
            previewWebp: 'https://i.ytimg.com/vi_webp/TrgM8Mbh-p8/maxresdefault.webp',
            video: {
                url: 'https://youtu.be/TrgM8Mbh-p8',
                playing: false
            }
        },
    ],
    error: false,
};

export default function videosReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_PLAYING_VIDEO:
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case STOP_PLAYING_ALL_VIDEOS:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
};