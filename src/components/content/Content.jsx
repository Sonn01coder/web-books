import React from 'react';
import BooksHot from './booksHot/BooksHot';
import Navbar from './navbar/Navbar';
import Slider from './slider/Slider';
import Testimonial from './testimonial/Testimonial';

function Content(props) {
    return (
        <div className='.modal-fullscreen'>
            <Slider />
            <Navbar />
            <Testimonial />
            <BooksHot />
        </div>
    );
}

export default Content;