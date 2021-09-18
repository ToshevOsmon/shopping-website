import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import logofooter from '../images/logo.png'

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col md="6">
                        <div className="brend">
                            <img src={logofooter} alt="brend image" />
                            <p className="brendText">lorem Ushbu darsimizda Landing pageimizning Footer qismini tuzib chiqamiz.
                                Keyingi darslarimizdan landing pagening
                                responsive holatini tuzib chiqishni ko'rib chiqamiz!
                                Blablablablablablabls</p>
                        </div>
                    </Col>

                    <Col md="4" className="footerlinks">
                        <ul className="prodacts">
                            <p className="theme">Products</p>
                            <li>
                                <a href="#">Trending</a>
                            </li>
                            <li>
                                <a href="#">My Account</a>
                            </li>
                            <li>
                                <a href="#">Vendors</a>
                            </li>
                            <li>
                                <a href="#">Brends</a>
                            </li>
                            <li>
                                <a href="#">Storefront</a>
                            </li>

                        </ul>
                        <ul className="prodacts">
                            <p className="theme">Legols</p>
                            <li>
                                <a href="#">License</a>
                            </li>
                            <li>
                                <a href="#">Refund Policy</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Contacts</a>
                            </li>

                        </ul>
                        <ul className="prodacts">
                            <p className="theme">Contacts</p>

                            <p className="sempleText">Fell free get in touch with us via phone or send us a message</p>

                            <li>
                                <a className="phone" href="tel:+998946530255">+998946530255</a>
                            </li>
                            <li>
                                <a className="email" href="mailto:toshev.osmon@gmail.com">toshev.osmon@gmail.com</a>
                            </li>


                        </ul>

                    </Col>
                </Row>
            </Container>

        </div>
    );
};


export default Footer;