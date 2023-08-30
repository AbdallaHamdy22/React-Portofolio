import React from 'react';
import "./port.css";
export default function Portfolio() {
    return (
        <div className='contport'>
            <h1>Portfolio</h1>
            <div className='containerStyle'>
                <div className='rowStyle'>
                <div className='rectangleStyle'>WEB DESIGN</div>
                <div className='rectangleStyle'>MOBILE DESIGN</div>
                <div className='rectangleStyle'>LOGO DESIGN</div>
                </div>
                <div className='rowStyle'>
                <div className='rectangleStyle'>WEB APPLICATION DEVELOPMENT</div>
                <div className='rectangleStyle'>MOBILE APPLICATION DEVELOPMENT</div>
                <div className='rectangleStyle'>PWA DEVELOPMENT</div>
                </div>
            </div>
        </div>
    );
}

