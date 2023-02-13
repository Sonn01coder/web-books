import React from 'react';
import BooksHot from './booksHot/BooksHot';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import News from './news/News';
import Slider from './slider/Slider';
import Testimonial from './testimonial/Testimonial';

function Content(props) {
    return (
        <div className='.modal-fullscreen'>
            <Slider />
            <Navbar />
            <Testimonial />
            <BooksHot />
            <News />
            <Footer />
        </div>
    );
}

export default Content;