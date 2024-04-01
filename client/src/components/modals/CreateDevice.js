import React, { useContext, useState } from "react";
import { Modal, Button, Form, Dropdown, Col, Row } from "react-bootstrap";
import { Context } from "../..";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', desctiption: '', number: Date.now()}]); console.log(info);
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number));
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2">
                        <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                                )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2">
                        <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                                )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control 
                        className="mt-2"
                        placeholder="Введите название устройства"
                    />
                     <Form.Control 
                        className="mt-2"
                        placeholder="Введите стоимость устройства"
                        type='number'
                    />
                     <Form.Control 
                        className="mt-2"
                        type='file'
                    />
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                            <Row className="mt-2" key={i.number}>
                                <Col md={4}>
                                    <Form.Control 
                                        placeholder="Введите название характеристики"
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control 
                                        placeholder="Ввведите описание"
                                    />
                                </Col>
                                <Col md={4}>
                                   <Button
                                        onClick={() => removeInfo(i.number)}
                                        variant={'outline-danger'}
                                        >
                                        Удалить
                                    </Button>
                                </Col>
                            </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;




