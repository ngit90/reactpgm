import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
        <FontAwesomeIcon  className='image-gallery__grid' icon={faFacebookF} />
        <FontAwesomeIcon className='image-gallery__grid'  icon={faInstagram} />
        <FontAwesomeIcon className='image-gallery__grid'  icon={faTwitter} />
        <FontAwesomeIcon className='image-gallery__grid' icon={faYoutube} />
      <div className="footer__content">
        <table >
            <tr >
                <td className='footer__links'> <a href="#about">Audio Description</a></td>
                <td  className='footer__links'><a href="#contact">Help Centre</a></td>
                <td  className='footer__links'> <a href="#privacy">Gift Cards</a></td>
                <td  className='footer__links'> <a href="#terms">Media Centre</a></td>
            </tr>
            <tr>
                <td  className='footer__links'> <a href="#about">Investor Relation</a></td>
                <td  className='footer__links' ><a href="#contact">Jobs</a></td>
                <td  className='footer__links'>  <a href="#privacy">Terms of Use</a></td>
                <td  className='footer__links'>  <a href="#terms">Privacy</a></td>
            </tr>
            <tr>
                <td  className='footer__links'> <a href="#about">Legal Notices</a></td>
                <td  className='footer__links'> <a href="#contact">Cookie Preferences</a></td>
                <td  className='footer__links' > <a href="#privacy">Corporate Information</a></td>
                <td className='footer__links'> <a href="#terms">Contact Us</a></td>
            </tr>
        </table>
       <div >
            <button className='footer_btn' > Service Code</button>
       </div>
      </div>
      <div className="footer__bottom">
        <p>© 2024 Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
