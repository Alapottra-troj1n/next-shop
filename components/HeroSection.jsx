import React from 'react';


const HeroSection = () => {
    return (
        <div >
            <div className="hero min-h-screen"  style={{
                backgroundImage: `url("/hero.jpg")`, backgroundSize: 'cover'
            }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl2">
                        <h1 className="mb-5 text-5xl font-bold">Next Generation Ecommerce</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn  bg-emerald-500 hover:bg-emerald-700">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;