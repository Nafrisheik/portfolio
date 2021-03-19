import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Feel free to check out my Social Media pages
        </p>
        <p className='footer-subscription-text'>
          You can contact me for collaboration any time.
        </p>        <br></br>
        <h3>Email : <a href='nafrisheik@gmail.com'>nafrisheik@gmail.com</a></h3>
      </section>      
      <section class='social-media'>
        <div class='social-media-wrap'>          
          <div class='social-icons'>
            {/* <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link> */}
            {/* <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link> */}
            <Link
              class='social-icon-link github'
              to='/'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </Link>
            
            <Link
              class='social-icon-link twitter'
              to={{ pathname: "https://www.linkedin.com/in/irfan-hussain-40a26962/" }}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin'  />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;