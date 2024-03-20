import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../images/logo.png';
import { CopyRight, ContactUs, FooterContainer, Ftr, Containers } from './Footer.styles';
import call from '../../images/call.png';
import location from '../../images/location.png';
import fb from '../../images/facebook.png';
import insta from '../../images/insta.png';

const Footer = () => {
  const Facebook = () => {
    window.location.href = "https://www.facebook.com/";
  };

  const Insta = () => {
    window.location.href = "https://www.instagram.com/";
  };

  const Ring = () => {
    window.open('tel:923181424147');
  };

  return (
    <FooterContainer>
      <Containers>
        <Container>
          <Row>
            <Col>
              <Ftr>
                <img src={logo} alt='footer-logo' />
                <p>Best Fast Food</p>
                <p>Take Away</p>
                <p>Home Delivery</p>
              </Ftr>
            </Col>
            <Col>
              <Ftr>
                <span><b>About Us</b></span>
                <p>Best Fast Food</p>
                <p>Take Away</p>
                <p>Home Delivery</p>
              </Ftr>
            </Col>
            <Col>
              <Ftr>
                <span><b>Contact Us</b></span>
                <ContactUs>
                  <img src={call} onClick={Ring} alt="call-icon" />
                  <p onClick={Ring}>+923181424147</p>
                </ContactUs>
                <ContactUs>
                  <img src={fb} alt="fb-icon" onClick={Facebook} />
                  <p onClick={Facebook}><u>www.facebook.com</u></p>
                </ContactUs>
                <ContactUs>
                  <img src={location} alt="fb-icon" />
                  <p>Minsk, Belarus</p>
                </ContactUs>
                <ContactUs>
                  <img src={insta} alt="Insta-icon" onClick={Insta} />
                  <p onClick={Insta}><u>www.instagram.com</u></p>
                </ContactUs>
              </Ftr>
            </Col>
          </Row>
          <CopyRight>@2024 Desi-doner. All right reserved.</CopyRight>
        </Container>
      </Containers>
    </FooterContainer>
  );
};

export default Footer;
