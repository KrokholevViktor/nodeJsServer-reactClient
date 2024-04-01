import React from "react";
import {Link, useLocation} from "react-router-dom";
import { Container, Form, Card, Button, Row } from "react-bootstrap";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location);

    return (
            <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
            >
                <Card style={{width: 600}} className="p-5">
                    <h2 className="m-auto">
                        {isLogin ?  'Авторизация' : 'Регистрация'}
                    </h2>
                    <Form className="d-flex flex-column">
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите ваш email..."
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите пароль"
                        />
                        <Row className="d-flex justify-content-between align-items-center mt-3 ps-2 pe-2">
                            {isLogin ?
                                <div>
                                    Нет аккаунта? 
                                    <Link to={REGISTRATION_ROUTE}>Зарегистрируйтесь</Link>
                                </div>
                                :
                                <div>
                                    Есть аккаунт? 
                                    <Link to={LOGIN_ROUTE}>Войдите</Link>
                                </div>}
                            <Button     
                            variant="outline-primary" 
                            className="" style={{width: '30%'}}>
                                {isLogin ? 'Войдите' : 'Регистрация'}
                            </Button>
                        </Row>
                    </Form>
                </Card>
            </Container>
    )
}
 
export default Auth;