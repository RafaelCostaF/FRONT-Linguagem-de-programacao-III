// pages.js
import { AppBar, Container } from "@mui/material";
import "./styles.css";
import NavBar from "./components/NavBar";
import Login from "./login/page";

import AppRouter from "./components/APPRouter";
import Signup from "./signup/page";
import ProfilePage from "./components/profilePage";

export default function Home() {
  return (
    <Container className="container">
      
      <ProfilePage/>
      
    </Container>
  );
}
