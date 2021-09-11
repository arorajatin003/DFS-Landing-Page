import React from 'react'
import "./Footer.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__contact">
                <div classNMae="footer__map">
                    <h1>Reatch Us Physically</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1616201349134!2d75.8291680145203!3d26.898365367184283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6eabc22758d%3A0x77a6123822a1ea99!2s267%2C%20Frontier%20Colony%2C%20Adarsh%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302004!5e0!3m2!1sen!2sin!4v1631298253060!5m2!1sen!2sin" width="500" height="300"  allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="footer__socialMedia">
                    <h1>Reach Us Vertually</h1>
                    {/* <form class="contact" action="mailto:ertos@gmail.com" method="post">
                    <textarea name="Senders name:  " rows="1" cols="32.5" placeholder="Name"></textarea><br>
                    <textarea name="Senders query:  " rows="2" cols="33" placeholder="Message"></textarea><br>
                    <button class="footer-btn" type="submit" name="button">SEND</button>
                    </form> */}
                    <form class="contact" action="mailto:arorajatin003@gmail.com" method="post">
                        <textarea name="Senders name:  " rows="1" cols="32.5" placeholder="Name"></textarea><br />
                        <textarea name="Senders query:  " rows="2" cols="33" placeholder="Message"></textarea><br />
                        <button class="footer-btn" type="submit" name="button">Send</button>
                    </form>
                    <div className="links">
                        <a><FacebookIcon className="icons"/></a>
                        <a><WhatsAppIcon className="icons"/></a>
                        <a><InstagramIcon className="icons"/></a>
                    </div>
                </div>
            </div>
            <h2>Made With ❤️ By Jatin Arora</h2>
            <p>Contact Details: 8955786743</p>
        </div>
    )
}

export default Footer
