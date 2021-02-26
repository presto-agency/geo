import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from 'browserHistory';
import projects from "store/projects/reducers";
import services from "store/services/reducers";
import offices from "store/offices/reducers";
import news from 'store/news/reducers'
import modal from 'store/modal/reducers';

export default combineReducers({
    router: connectRouter(history),
    projects,
    services,
    offices,
    news,
    modal
});