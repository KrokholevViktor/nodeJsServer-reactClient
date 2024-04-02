import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row, Button } from "react-bootstrap";
import bigStar from '../assets/big-star.jpg';
import {useParams} from 'react-router-dom';
import { fetchOneDevice } from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <div>
            <Container className="mt-4">
                <Row className="align-items-top justify-content-center">
                    <Col md={4}>
                        <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
                    </Col>
                    <Col md={4}>
                        <Row 
                        className="d-flex flex-column align-items-center align-content-center">
                            <h2>{device.name}</h2>
                            <div
                                className="d-flex align-items-center "
                                style={{
                                    backgroundImage: `url(${bigStar})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center center',
                                    width: 240,
                                    height: 240,
                                    backgroundSize: 'cover',
                                    justifyContent: 'center',
                                    fontSize: 64
                                }}
                            >
                                {device.rating}
                            </div>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Card
                            className="d-flex flex-column align-items-center justify-content-around"
                            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                        >
                            <h3>от {device.price} руб.</h3>
                            <Button variant={'outline-danger'}>
                                Добавить в корзину
                            </Button>
                        </Card>
                    </Col>
                </Row>
                <Row className="d-flex flex-column m-3">
                    <h1>Характеристики</h1>
                    {device.info.map((info, index) => 
                            <Row 
                            style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}
                            key={info.id}>
                                {info.title} : {info.description}
                            </Row>
                        )}
                </Row>
            </Container>
        </div>
    )
}
 
export default DevicePage;