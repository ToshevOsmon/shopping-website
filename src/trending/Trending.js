import React from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import Trend from '../JSON/trending.json'

const Trending = () => {
    return (
        <div className="trending">

            <div className="pageTitles">
                <p>Top Products</p>
                <h4>Trending This Week</h4>
            </div>
            <Container>
                <Row>
                    {Trend.map((post) => {
                        return (
                            <Col key={post.id} md="3" >
                                <Card >
                                    <CardHeader>
                                        <img src={post.img} alt={post.name} />
                                    </CardHeader>
                                    <CardBody>
                                        <div className="infoTitle">
                                            <p className="name">{post.name}</p>
                                            <span className="price">{post.sum}</span>

                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })}

                    <Col md="12" className="buttonArea">
                        <a href="#" className="exploreBtn">Explore Other Products</a>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Trending;