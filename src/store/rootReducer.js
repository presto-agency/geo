import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from 'browserHistory';
import videos from "store/videos/reducers";
import services from "store/services/reducers";
import offices from "store/offices/reducers";
import news from 'store/news/reducers'
import modal from 'store/modal/reducers';
import about from "store/about/reducers";
import disciplines from "store/disciplines/reducers";
import contact from "store/contact/reducers";
import projects from "store/projects/reducers";
import homePage from "store/homePage/reducers";
import servicesPage from 'store/servicesPage/reducers';
import social from "store/social/reducers";

export default combineReducers({
    router: connectRouter(history),
    homePage,
    servicesPage,
    videos,
    services,
    offices,
    news,
    modal,
    about,
    disciplines,
    contact,
    projects,
    social
});