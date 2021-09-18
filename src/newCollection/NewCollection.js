import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Col, Container, Row } from 'reactstrap';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'


const NewCollection = () => {
    return (
        <div className="newcollec">
            <Container>
                <Row>
                    <Col className="mainTitle" md="12">
                        <p>Straight From Nike</p>
                        <h4 className="titles">New Collection</h4>
                    </Col>
                    <Col className="cardsArea" lg="6" md="12">
                        <Row>
                            <Col className="cards" lg="6" md="6">
                                <Card>
                                    <CardBody>
                                        <img src={img1} alt="new collection " />

                                    </CardBody>

                                    <CardFooter>
                                        <p>Nike Air Force</p>
                                        <span>$99</span>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col className="cards" lg="6" md="6">
                                <Card>
                                    <CardBody>
                                        <img src={img2} alt="new collection " />

                                    </CardBody>

                                    <CardFooter>
                                        <p>Nike Air Force</p>
                                        <span>$99</span>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col className="cards" lg="6" md="6">
                                <Card>
                                    <CardBody>
                                        <img src={img3} alt="new collection " />

                                    </CardBody>

                                    <CardFooter>
                                        <p>Nike Air Force</p>
                                        <span>$99</span>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col className="cards" lg="6" md="6">
                                <Card>
                                    <CardBody>
                                        <img src={img4} alt="new collection " />

                                    </CardBody>

                                    <CardFooter>
                                        <p>Nike Air Force</p>
                                        <span>$99</span>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="cardsArea2" lg="6" md="12">
                        <Card>
                            <CardBody>
                                <div className="prodactPrice">
                                    <span>SALE -50%</span>
                                    <span>$99</span>
                                </div>
                                <img src={img5} alt="Image " />
                            </CardBody>
                            <CardFooter className="leftCardFooter">
                                <h4 className="prodactName">Nike Air Force 1 Shadow</h4>
                                <p className="prodactBrand">Brand: Nike</p>
                            </CardFooter>
                        </Card>
                    </Col>

                    <Col md="12" className="buttonArea">
                        <a href="#" className="exploreBtn">Explore Other Products</a>
                    </Col>
                </Row>


            </Container>
        </div>
    );
};


export default NewCollection;