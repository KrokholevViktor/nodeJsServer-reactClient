import React from "react";
import {Card, Col, Image} from 'react-bootstrap';
import star from '../assets/star.svg'
import {useNavigate} from 'react-router-dom';
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"} className="mb-3">
                <Image width={150} height={150} src={device.img} />
                <div className="d-flex justify-content-between mt-1">
                    <div className="text-black-50">
                        samsung
                    </div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={10} height={10} src={star}></Image>
                    </div>
                </div>
                <div>
                    {device.name}
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;