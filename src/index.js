import React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import App from 'components/App';
import reportWebVitals from './reportWebVitals';
import store from 'store';
import history from 'browserHistory';
import ErrorBoundary from "components/ErrorBoundary";
import 'assets/sass/index.scss';

const rootElement = document.getElementById("root");

// if (rootElement.hasChildNodes()) {
//     hydrate(
//         <Provider store={store}>
//             <React.StrictMode>
//                 <ErrorBoundary>
//                     <App />
//                 </ErrorBoundary>
//             </React.StrictMode>
//         </Provider>,
//         document.getElementById('root')
//     );

// } else {
    render(
        <Provider store={store}>
            {/*<ConnectedRouter history={history}>*/}
            <React.StrictMode>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </React.StrictMode>
            {/*</ConnectedRouter>*/}
        </Provider>,
        document.getElementById('root')
    );

// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
