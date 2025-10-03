import React, {useState, useEffect} from 'react'; 

function imageSlider({images, interval=3000}) {

    return(
        <div className='slider-container'>
            <div className='slider-wrapper' style={{transform: `translateX(-$current)`}}
        </div>
    )
}

