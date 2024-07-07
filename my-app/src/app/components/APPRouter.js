// src/app/components/AppRouter.js
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Login from '../login/page';
import Signup from '../signup/page';
import ProfilePage from '../profile/page';
import Home from '../page'; // Ajuste de importação para a página inicial
import ChatPage from '../chat/page';

const AppRouter = () => {
    const router = useRouter();

    return (
        <div>
            {router.pathname === '/login' && <Login />}
            {router.pathname === '/signup' && <Signup />}
            {router.pathname === '/profile' && <ProfilePage />}
            {router.pathname === '/chat' && <ChatPage />}
            {router.pathname === '/' && <Home />} {/* Ajuste para a rota da página inicial */}
            
        </div>
    );
};

export default AppRouter;
