import React, { Component } from 'react';

class ErrorBoundary extends Component {

    state = {
        error: false,
        errorInfo: ''
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo
        });
    }

    render() {

        const { error, errorInfo } = this.state;

        return error ? <div>Error! {errorInfo}</div> : this.props.children;
    }

}
export default ErrorBoundary;