import React from 'react'
import "./about.css";

function About() {
    return (
        <div className="about" id="about">
            <h1>About Us</h1>
            <div className="about__content">
                <div className="about__image__div">
                    <img className="about__image" src="/images/Capture.PNG" />    
                </div>
                <div className="about__text__div">
                    <p className="about__text">
                    We have had a shop in Adarsh Nadar, Jaipur for 15 years. We have a complete women's innerwear range of Kalyani with other brands too. 
Our other specialties are in Women's casual wear, hair accessories, beauty products, Night clothes. We also sell men's innerwear, shorts, and basic household stuff.
                    </p>
                </div>
            </div>
                
        </div>
    )
}

export default About
