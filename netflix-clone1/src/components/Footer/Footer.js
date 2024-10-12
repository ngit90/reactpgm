import React,{useContext} from 'react';
import {AppContext} from '../../AppContext';
import './Footer.css'; // Assuming you have a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const {fdata} = useContext(AppContext);
   return (
    <footer className="footer">
        <FontAwesomeIcon  className='image-gallery__grid' icon={faFacebookF} />
        <FontAwesomeIcon className='image-gallery__grid'  icon={faInstagram} />
        <FontAwesomeIcon className='image-gallery__grid'  icon={faTwitter} />
        <FontAwesomeIcon className='image-gallery__grid' icon={faYoutube} />
      <div className="footer__content">
        <table >
            <tr >
                <td className='footer__links'> Audio Description</td>
                <td  className='footer__links'>Help Centre</td>
                <td  className='footer__links'> Gift Cards</td>
                <td  className='footer__links'> Media Centre</td>
            </tr>
            <tr>
                <td  className='footer__links'> Investor Relation</td>
                <td  className='footer__links' >Jobs</td>
                <td  className='footer__links'> Terms of Use</td>
                <td  className='footer__links'> Privacy</td>
            </tr>
            <tr>
                <td  className='footer__links'> Legal Notices</td>
                <td  className='footer__links'>Cookie Preferences</td>
                <td  className='footer__links' >Corporate Information</td>
                <td className='footer__links'> Contact Us</td>
            </tr>
        </table>
       <div >
            <button className='footer_btn' > Service Code</button>
       </div>
      </div>
      <div className="footer__bottom">
        <p>{fdata} </p>
      </div>
    </footer>
  );
}

export default Footer;
