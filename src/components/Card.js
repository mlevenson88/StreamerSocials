import React from 'react';
import './Card.css';

const Card = ({name, twitter, instagram, twitch, img}) => {
    return (
        <div className='tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={img} alt="Streamer logo" width="200px" height="200px"/>
            <div>
                <h2 className='near-white'>{name}</h2>
                <p className='near-white'>Twitter: {twitter}</p>
                <p className='near-white'>Instagram: {instagram}</p>
                <p className='near-white'>Twitch: <a className='near-white' href={'https://www.' + twitch}>{twitch}</a></p>
            </div>
        </div>
    );
}

export default Card;