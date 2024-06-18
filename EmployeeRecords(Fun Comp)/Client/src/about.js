import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
class About extends Component {
    
    constructor()
    {
        super();
        console.log("About Constructor Called.")
    }

    componentWillUnmount()
    {
        console.log("ABOUT COMPONENT IS ABOUT TO UNMOUNT!");
    }

    render() 
    { 
        return (
        <div>
            <div className="d-flex justify-content-end">
            <div className='btn btn-outline-info me-2'><Link to="/dashboard" >Dashboard</Link></div>
            <div className='btn btn-outline-info me-2'><Link to="/about">About Us</Link></div>
            <div className='btn btn-outline-info me-2'><Link to="/contact">Contact Us</Link></div>
            <div className='btn btn-outline-danger me-3'><Link to="/">Sign Out</Link></div>
        </div>
        <h1>This is about us!</h1>
        <h2>Summary:</h2>
            <p>

            I am a "Highly motivated and skilled IT professional and a recent graduate with a passion for cutting edge
            technology and a drive to make a positive impact in the world of engineering. I am eager to embark on a rewarding career
            journey. Through a combination of coursework and extracurricular activities, I honed my problem-solving
            abilities, analytical thinking, and teamwork skills.


            We at <i>DMC</i> Develop Mobile Apps using <b>Swift,Android Studio and React Native</b>
            </p>
            <a href=' https://www.linkedin.com/in/shriyash-thakare-05695b1b2'> linkedin </a>

        
        </div>
    
    );
    }
}

export default About;