import React from 'react';

const Banner = () => {
    return (
        <div className="container-fluid p-0">
            <img
                src='src/assets/img/banner2.jpg'
                alt="Main Banner"
                className="img-fluid d-block mx-auto mt-5"
                style={{ maxHeight: '400px', objectFit: 'cover', maxWidth: '1600px' }}
            />
            {/* <img
                src='src/assets/img/banner2.jpg' // Make sure this path is correct
                alt="Main Banner"
                className="img-fluid w-100"
                style={{ maxHeight: '400px', objectFit: 'cover', maxWidth: '1300px' }}
            /> */}
        </div>
    );
};

export default Banner;
