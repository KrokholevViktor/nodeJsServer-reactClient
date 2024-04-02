import React, { useContext } from "react";
import { Context } from "..";
import {Navbar, Nav, Container, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import {observer} from 'mobx-react-lite';
import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Link style={{color: 'white', textDecoration: 'none'}} to={SHOP_ROUTE}>КупиДевайс</Link>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button 
                        onClick={() => navigate(ADMIN_ROUTE)} 
                        variant={'outline-light'}>
                            Админ панель
                        </Button>
                        <Button 
                        onClick={() => logOut()} 
                        variant={'outline-light'} 
                        className="ms-2" 
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button 
                        variant={'outline-light'} 
                        onClick={() => navigate(LOGIN_ROUTE)}>
                            Авторизация
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar;