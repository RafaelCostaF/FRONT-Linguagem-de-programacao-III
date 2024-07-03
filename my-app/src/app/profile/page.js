'use client'
import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import Posts from '../components/Posts';
import PostForm from '../components/PostForm';
import { getPostById } from '../util/api'; // Substitua pela sua função de API

const ProfilePage = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({
    name: 'Usuário Exemplo', // Exemplo de nome de usuário
    email: 'usuario@example.com', // Exemplo de email de usuário
    // Outras informações do usuário
  });

  useEffect(() => {
    // Carregar os posts do usuário ao montar a página
    loadUserPosts(); // Função para carregar posts do usuário
  }, []);

  const loadUserPosts = async () => {
    try {
      const postsData = await getPostsById(user.id); // Exemplo de função para buscar posts do usuário
      setPosts(postsData); // Atualizar estado dos posts
    } catch (error) {
      console.error('Erro ao carregar posts do usuário:', error);
      // Lógica para tratamento de erro
    }
  };

  const handlePostSubmit = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>
          Perfil de {user.name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Email: {user.email}
        </Typography>
        <PostForm onPostSubmit={handlePostSubmit} />
        {posts.map((post) => (
          <Posts
            key={post.id} // Ajuste conforme sua estrutura de dados
            avatarLetter="U" // Exemplo de avatarLetter, ajuste conforme necessário
            avatarColor="#f44336" // Exemplo de avatarColor, ajuste conforme necessário
            username="User" // Exemplo de username, ajuste conforme necessário
            timestamp={post.timestamp}
            content={post.content}
            mediaType={post.mediaType}
            mediaSrc={post.mediaSrc}
            detailedContent={post.detailedContent}
          />
        ))}
      </Container>
    </div>
  );
};

export default ProfilePage;
