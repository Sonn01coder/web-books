import React, { useState } from 'react';
import './slider.css'
import slider1 from "../../../asset/img/slider3.jpeg"
import slider2 from "../../../asset/img/slider2.jpg"
import { useEffect } from 'react';

function Slider(props) {
    const [sliderCurr, setSliderCurr] = useState([slider1, slider2])
    const [count, setCount] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setCount(count < 1  ? count + 1 : 0)
        }, 3000)
    }, [count])
    return (
        <div className='slider_container'>
            <div className='slider_items' style={{backgroundImage: `url(${sliderCurr[count]})`}}>
                <div className='slider_wrap'>
                    <p>CUỐN SÁCH CỦA BẠN</p>
                    <div className='slider_search'>
                        <input type='text' placeholder='Tìm kiếm tại đây...'/>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;