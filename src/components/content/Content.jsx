import React from 'react';
import BooksHot from './booksHot/BooksHot';
import Header from './Header';
import Silder from './slider/Silder';
import Testimonial from './testimonial/Testimonial';

function Content(props) {
    return (
        <div className='.modal-fullscreen'>
            <Header />
            <Silder />
            <Testimonial />
            <BooksHot />
        </div>
    );
}

export default Content;