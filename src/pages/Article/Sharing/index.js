import React, { Fragment } from 'react';
import {
    PinterestShareButton,
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton
} from 'react-share';

const Sharing = () => {
    return (
        <Fragment>
            <PinterestShareButton
                className="link-social"
                url="https://geo-presto.netlify.app/project/0"
                media="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1526&q=80"
                description="This December we are giving you the chance to win a signed copy of Portfolio or The Flying Gherkin children’s activity pack. Decide where The Flying Gherkin should visit next. Submit your drawing of The Flying Gherkin at its next destination to win a festive Flying Gherkin activity pack."
            />
            <FacebookShareButton
                className="link-social"
                url="https://geo-presto.netlify.app/"
            />
            <TwitterShareButton
                className="link-social"
                url="https://geo-presto.netlify.app/project/0"
                title="Enter our festive giveaways"
            />
            <LinkedinShareButton
                className="link-social"
                url="https://geo-presto.netlify.app/"
                title="Enter our festive giveaways"
                summary="This December we are giving you the chance to win a signed copy of Portfolio or The Flying Gherkin children’s activity pack. Decide where The Flying Gherkin should visit next. Submit your drawing of The Flying Gherkin at its next destination to win a festive Flying Gherkin activity pack."
                source="https://geo-presto.netlify.app/project/0"
            />
        </Fragment>
    )
};

export default Sharing;