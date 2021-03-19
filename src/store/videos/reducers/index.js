import {STOP_PLAYING_ALL_VIDEOS, TOGGLE_PLAYING_VIDEO} from "store/constants";

const initialState = {
    loading: false,
    data: [
        {
            id: 0,
            preview: '',
            video: {
                url: 'https://youtu.be/4jSv9oFM5m0',
                playing: false
            }
        },
        {
            id: 1,
            preview: '',
            video: {
                url: 'https://youtu.be/Lth1FAkLwhY',
                playing: false
            }
        },
        {
            id: 2,
            preview: '',
            video: {
                url: 'https://youtu.be/c7TOuMl-Ags',
                playing: false
            }
        },
        {
            id: 3,
            preview: '',
            video: {
                url: 'https://youtu.be/BjZ0JVD4HWw',
                playing: false
            }
        },
        {
            id: 4,
            preview: '',
            video: {
                url: 'https://youtu.be/bqwPMbhcZ5Q',
                playing: false
            }
        },
        {
            id: 5,
            preview: '',
            video: {
                url: 'https://youtu.be/g5_d08lJ53w',
                playing: false
            }
        },
        {
            id: 6,
            preview: '',
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