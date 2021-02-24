import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import App from 'components/App';
import reportWebVitals from './reportWebVitals';
import store from 'store';
import history from 'browserHistory';
import 'assets/sass/index.scss';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
