
import Login from "./components/Login";
import { Container } from "@mui/material";
import './page.module.css'
import Posts from "./components/Posts";



const detailedContent = "Ola"
export default function Home() {
  return (
    <Container>
          <Posts
        avatarLetter="U"
        avatarColor="#f44336" // substituindo o uso de red[500]
        username="John Doe"
        timestamp="June 17, 2024"
        content="This is a sample social media post. Check out the image below!"
        mediaType="image"
        mediaSrc="/static/images/sample.jpg"
        detailedContent={detailedContent}
      />
    </Container>
    
  );
}
 