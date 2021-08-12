import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

import '../css/footer.css'

const Footer = () => {
    return (
        <div>
            <Container fluid>
                <Row className='footer-main bg-dark '>
                    <Col xs={12} md={6} lg={7} className="part1 text-light">
                        <span className="span1"> Fashion Style </span>
                        <span className="span2"> Copyright 2020 - 2021 - All rights reserved</span>
                    </Col>
                    <Col xs={12} md={6} lg={5} className="part2 text-light">
                        <a href="#FacebookAccount"> <FontAwesomeIcon icon={faFacebook} /> </a>
                        <a href="#TwitterAccount"> <FontAwesomeIcon icon={faTwitter} /> </a>
                        <a href="#InstagramAccount"> <FontAwesomeIcon icon={faInstagram} /> </a>
                        <div className="vert-line"></div>
                        <a href="#1"> Endorsement </a>
                        <a href="#2"> FAQ </a>
                        <a href="#3"> Contact </a>
                        <a href="#4"> Legals Mentions </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;