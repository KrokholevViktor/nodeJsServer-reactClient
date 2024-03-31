import React, { useContext } from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import { autRoutes, publicRoutes } from "../routes";
import { Context } from "..";

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isAuth && autRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component />} />
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component />} />
            )}

            {/* Редирект на главную при вводе случайного адреса */}
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRouter;