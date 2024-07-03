
import { AppBar, Container } from "@mui/material";
import "./styles.css";

import ProfilePage from "./profile/page";

export default function Home() {
  return (
    <Container className="container">
      
      <ProfilePage/>
      
    </Container>
  );
}
