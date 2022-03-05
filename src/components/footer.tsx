import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGooglePlusG, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons'

import { Button, Form, InputGroup } from 'react-bootstrap'
import { faEnvelope, faMapMarker, faPhoneAlt, faRss } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
      <div>
        <Container fluid className='footer-main bg-dark '>
          <Container className='containter2'>
            <Row>
              <Col  lg={3} sm={6}>
                  <div className='mt-4'>
                    <h4 className='mb-2'>About Store</h4>
                    <ul className='sub-text'>
                      <li>
                        <span className='mr-2'><FontAwesomeIcon icon={faMapMarker}/></span>
                        <p>
                            Styleway - Fashion Style
                            507-Union Trade ipsum , Ring Road
                            France
                        </p>
                      </li>
                      <li>
                          <span className='mr-2'><FontAwesomeIcon icon={faPhoneAlt}/></span>
                          <p>000-000-0000</p>
                      </li>
                      <li>
                          <span className='mr-2'><FontAwesomeIcon icon={faEnvelope}/></span>
                          <p>sales@yourcompany.com</p>
                      </li>
                    </ul>
                  </div>
              </Col>
              <Col lg={3} sm={6}>
                <div className='mt-4'>
                  <h4 className='mb-2'>Products</h4>
                  <ul className='sub-text'>
                    <li>Prides drop</li>
                    <li>New products</li>
                    <li>Best sales</li>
                    <li>Contact us</li>
                    <li>Sitemap</li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} sm={6}>
                <div className='mt-4'>
                  <h4 className='mb-2'>Our Company</h4>
                  <ul className='sub-text'>
                    <li>Delivery</li>
                    <li>Lega notice</li>
                    <li>Terms and condition of use</li>
                    <li>About us</li>
                    <li>Secure payment</li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} sm={6}>
                <div className='mt-4'>
                  <h4 className='mb-2'>Newsletter</h4>
                  <div className='sub-text'>
                    <p>Subscribe to our latest newsletter to get news about special discounts.</p>
                    <InputGroup className='mt-3'>
                      <Form.Control type='text' placeholder='Your address Email..' />
                      <Button id="button-addon" variant="outline-info" type="submit">Submit</Button>
                    </InputGroup>
                    <div className='block-social mt-4'>
                      <ul>
                        <li><span className='social-item'><FontAwesomeIcon icon={faFacebookF}/></span></li>
                        <li><span className='social-item'><FontAwesomeIcon icon={faTwitter}/></span></li>
                        <li><span className='social-item'><FontAwesomeIcon icon={faRss}/></span></li>
                        <li><span className='social-item'><FontAwesomeIcon icon={faYoutube}/></span></li>
                        <li><span className='social-item'><FontAwesomeIcon icon={faGooglePlusG}/></span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
}

export default Footer;