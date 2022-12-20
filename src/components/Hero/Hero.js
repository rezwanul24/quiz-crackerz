import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid py-5 bg-secondary text-white" style={{ backgroundImage: "url(images/background.jpg)" }}>
                <div className="container">
                    <h1 className="display-4 text-bg-danger rounded-pill">Test Yourself with quiz</h1>
                    <p className="lead text-bg-warning">Take our quiz and test what you have learned </p>
                </div>
            </div>

        </div>
    );
};

export default Hero;