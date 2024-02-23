import React from 'react';

const CardImg = ({ src, alt }) => {
    return (
        <div>
            <img src={src} alt={alt} />
        </div>
    );
}

export default CardImg;
