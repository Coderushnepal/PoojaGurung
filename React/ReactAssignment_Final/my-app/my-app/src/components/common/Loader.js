import React from 'react';

const Loader = () => (
    <div>
        <div className="mesh-loader">
        <div className="set-one">
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
        <div className="set-two">
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
        </div>
        <div className="loader-para">
           <p>Please wait for 5 seconds...</p>
        </div>       
    </div>
);

export default Loader;