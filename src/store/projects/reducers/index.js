import {STOP_PLAYING_ALL_VIDEOS, TOGGLE_PLAYING_VIDEO} from "store/constants";

const initialState = {
    loading: false,
    data: [
        {
            id: 0,
            title: 'Stelios Ioannou Learning Resource Center',
            description: 'A thoroughly developed, research-backed and meticulously tested user experience is among the key success factors for e-commerce projects.',
            tags: ['Logistics & Industrial', 'Industrial'],
            preview: 'https://cdn.pixabay.com/photo/2018/04/28/10/55/architecture-3357028_960_720.jpg',
            video: {
                url: 'https://cdn.videvo.net/videvo_files/video/free/2019-09/small_watermarked/190828_07_MarinaBayatNightDrone_UHD_02_preview.webm',
                playing: false
            }
        },
        {
            id: 1,
            title: 'Binet Jbeil',
            description: 'A full fledged city designed around an Olympic Village designed to cater for a future prospect to hold the world summer Olympics in KSA. The city contains more than 30,000 villa, 30,000 residential unit, a five star hotel, a mega mall, 700,000 sqm of office space and more.',
            tags: ['2020, DUBAI, UAE'],
            preview: 'https://cdn.pixabay.com/photo/2014/03/08/22/32/escalator-283448_960_720.jpg',
            video: {
                url: '',
                playing: false
            }
        },
        {
            id: 2,
            title: 'Nabi Shit',
            description: 'A thoroughly developed, research-backed and meticulously tested user experience is among the key success factors for e-commerce projects.',
            tags: ['2020, DUBAI, UAE'],
            preview: 'https://cdn.pixabay.com/photo/2013/11/05/19/12/buildings-205986_960_720.jpg',
            video: {
                url: 'https://cdn.videvo.net/videvo_files/video/free/2018-01/small_watermarked/171124_E1_HD_012_preview.webm',
                playing: false
            }
        },
        {
            id: 3,
            title: 'Limitless Tower',
            description: 'A full fledged city designed around an Olympic Village designed to cater for a future prospect to hold the world summer Olympics in KSA. The city contains more than 30,000 villa, 30,000 residential unit, a five star hotel, a mega mall, 700,000 sqm of office space and more.',
            tags: ['2020, DUBAI, UAE'],
            preview: 'https://cdn.pixabay.com/photo/2015/12/08/00/40/empire-state-building-1081929_960_720.jpg',
            video: {
                url: '',
                playing: false
            }
        },
        {
            id: 4,
            title: 'Naqoura resort',
            description: 'A thoroughly developed, research-backed and meticulously tested user experience is among the key success factors for e-commerce projects.',
            tags: ['Logistics & Industrial', 'Industrial'],
            preview: 'https://cdn.pixabay.com/photo/2018/01/31/23/25/skyscraper-3122210_960_720.jpg',
            video: {
                url: 'https://cdn.videvo.net/videvo_files/video/free/2014-06/small_watermarked/Blue_Sky_and_Clouds_Timelapse_0892__Videvo_preview.webm',
                playing: false
            }
        },
        {
            id: 5,
            title: 'Nabi Shit',
            description: 'A full fledged city designed around an Olympic Village designed to cater for a future prospect to hold the world summer Olympics in KSA. The city contains more than 30,000 villa, 30,000 residential unit, a five star hotel, a mega mall, 700,000 sqm of office space and more.',
            tags: ['2020, DUBAI, UAE'],
            preview: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            video: {
                url: '',
                playing: false
            }
        }
    ],
    error: false,
};

export default function projectsReducer(state = initialState, action) {
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