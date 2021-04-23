import React from 'react';
import { ContextConsumer } from 'components/Context';

const withBaseUrl = () => (Wrapped) => {
    return (props) => {
        return (
            <ContextConsumer>
                {
                    (baseUrl) => {
                        return (<Wrapped {...props} baseUrl={baseUrl} />)
                    }
                }
            </ContextConsumer>
        )
    }
};

export default withBaseUrl;