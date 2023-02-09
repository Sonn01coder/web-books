import React from 'react';
import Silder from './slider/Silder';
import Testimonial from './testimonial/Testimonial';

function Content(props) {
    return (
        <div className='.modal-fullscreen'>
            <Silder />
            <Testimonial />
        </div>
    );
}

export default Content;