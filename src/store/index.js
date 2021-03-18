import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleWare from 'redux-saga';
import history from 'browserHistory';
import logger from 'redux-logger';
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const bindMiddleware = (middleware) => {
    if(process.env.NODE_ENV !== 'production') {
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const sagaMiddleware = createSagaMiddleWare();

// const enhancer = bindMiddleware([sagaMiddleware, routerMiddleware(history), logger]);
const enhancer = bindMiddleware([sagaMiddleware, routerMiddleware(history)]);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;