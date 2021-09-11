import React from 'react'
import "./intro.css";
import WebIcon from '@material-ui/icons/Web';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

function Intro() {
    return (
        <div className="intro" id="home">
            <div classNmae="intro__content">
                <div className="intro__content__title__div">
                    <h1 className="intro__content__title">Durga Fancy Store</h1>
                </div>
                <div className="intro__content__text__div">
                    <p className="intro__content__text">We Are The Choice For The Womens In Fashion</p>
                </div>
                <div className="intro__buttonGroup">
                    <a className="whatsApp__button">
                        <WhatsAppIcon className="intro__icons"/>
                        WhatsApp
                    </a>
                    <a className="web__button">
                        <WebIcon className="intro__icons"/>
                        Web App
                    </a>
                </div>
            </div>
            <div className="intro__image_div">
                <img className="intro__image" src="/images/mobile_shot.PNG"></img>
            </div>
        </div>
    )
}

export default Intro
