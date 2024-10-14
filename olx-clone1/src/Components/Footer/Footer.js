import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
     <div className="footer__content">
        <table >
          <tr>
            <th  className='footer__links' style={{color:'black'}}>POPULAR LOCATION</th>
            <th  className='footer__links' style={{color:'black'}}>TRENDING LOCATION</th>
            <th  className='footer__links' style={{color:'black'}}>ABOUT UT</th>
            <th  className='footer__links' style={{color:'black'}}>OLX</th>
            <th  className='footer__links'style={{color:'black'}}>FOLLOW US</th>
          </tr>
            <tr >
                <td className='footer__links'> Kolkata</td>
                <td  className='footer__links'> Hydrabad</td>
                <td  className='footer__links'> Tech@OLX</td>
                <td  className='footer__links'> Blog</td>
            </tr>
            <tr>
            
                <td  className='footer__links' >Chennai</td>
                <td  className='footer__links'> Pune</td>
                <td  className='footer__links' ></td>
                <td  className='footer__links'> Help</td>
            </tr>
            <tr>
            <td  className='footer__links'> Mumbai</td>
            <td  className='footer__links' >Chennai</td>
            <td  className='footer__links' ></td>
            <td  className='footer__links' >SiteMap</td>
            </tr>
            <tr>
            <td  className='footer__links'> Pune</td>
            <td  className='footer__links' >Nashik</td>
            <td  className='footer__links' ></td>
            <td  className='footer__links' >Legal & Privacy</td>
            </tr>
        </table>
      </div>
      <div className="footer">
      <img
            src="../../../Images/footerimg.png"
            alt=""

          />
          <div className="footerpara">
          <p >Help Sitemap</p>
          <p className='para2'>All right reserved © 2006-2021 OLX</p>
          </div>
      </div>
    </div>
  );
}

export default Footer;
