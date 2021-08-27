import React from 'react';


import Typed from 'react-typed';
const Header = () => {
    return (
        <>
        <div className="header-wraper">
            <div className="main-info">
                <h1>web design and development</h1>
                <Typed className="typed-text"
                strings={["Soft. Developer","Web Developer","App Developer"]}                
                typeSpeed={40}
                backSpeed={60}
                loop
                >
                </Typed>
                <a href="" className="btn-main-offer">contact me</a>
                
            </div>
        </div>
        </>
    );
};

export default Header;