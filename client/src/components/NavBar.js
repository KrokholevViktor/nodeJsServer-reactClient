import React, { useContext } from "react";
import { Context } from "..";
import {Navbar, Nav, Container, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import {observer} from 'mobx-react-lite';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Link style={{color: 'white', textDecoration: 'none'}} to={SHOP_ROUTE}>КупиДевайс</Link>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button variant={'outline-light'}>Админ панель</Button>
                        <Button variant={'outline-light'} className="ms-2" onClick={() => user.setIsAuth(false)}>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar;