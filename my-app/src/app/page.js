'use client'

import NavBar from './components/NavBar';
import { AuthProvider } from './context/AuthContext'
import {Login} from './login/page' 
function HomePage({ Component, pageProps }) {
    return (
        <>
            <NavBar/>
        </>
        
    );
}

export default HomePage;

