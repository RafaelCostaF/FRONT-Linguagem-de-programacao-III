// components/APPRouter.js
'use client'
import React from 'react';
import { useRouter } from 'next/router'; // Importe de next/router para manipulação de rotas
import Login from '../login/page';
import Signup from '../signup/page';
import ProfilePage from './profilePage';
import Home from '../page'; // Ajuste de importação para a página inicial

const AppRouter = () => {
    const router = useRouter();

    return (
        <div>
            {router.pathname === '/login' && <Login />}
            {router.pathname === '/signup' && <Signup />}
            {router.pathname === '/profile' && <ProfilePage />}
            {router.pathname === '/' && <Home />} {/* Ajuste para a rota da página inicial */}
        </div>
    );
};

export default AppRouter;
