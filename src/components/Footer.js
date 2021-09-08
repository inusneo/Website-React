import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-sub">
        <h3 className="footer-sub-heading">
          Change the way you travel, be closer to nature. Take a second to appreciate everyday beauty
        </h3>
        <p className="footer-sub-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-area">
          <form action="/">
            <input type="email" name="email" placeholder="Your Email" className="footer-input" />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-links-wrapper">
          <div className="footer-link-items">
            <h3>About Us</h3>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h3>Contact Us</h3>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
        <div className="footer-links-wrapper">
          <div className="footer-link-items">
            <h3>About Us</h3>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h3>Contact Us</h3>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
      </div>
      <section className="sns">
        <div className="sns-wrap">
          <h2 className="footer-logo">
            <Link to='/' className="sns-logo">
              Travel <i className="far fa-paper-plane" />
            </Link>
          </h2>
          <small className="website-rights">Travel &copy; 2021 Allright Reserved.</small>
          <div className="sns-icons">
            <Link className="sns-icon-link facebook" 
              to='/' 
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link className="sns-icon-link instagram" 
              to='/' 
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link className="sns-icon-link youtube" 
              to='/' 
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;