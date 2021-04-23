import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from 'components/App';
import reportWebVitals from './reportWebVitals';
import store from 'store';
import ErrorBoundary from "components/ErrorBoundary";
import { ContextProvider } from 'components/Context';
import 'assets/sass/index.scss';

const _baseURL = process.env.REACT_APP_API_URL;

render(
    <Provider store={store}>
        <React.StrictMode>
            <ErrorBoundary>
                <ContextProvider value={_baseURL}>
                    <App />
                </ContextProvider>
            </ErrorBoundary>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
