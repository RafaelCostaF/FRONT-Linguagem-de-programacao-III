'use client';
import { useState, useEffect } from 'react';
import { Button, Typography, Container, Box, Card } from '@mui/material';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import { useAuth } from '../context/AuthContext';
import { getMyPosts, createPost } from '../util/api';
import { useRouter } from 'next/navigation';
import styles from '../styles/Profile.module.css';
import NavBar from '../components/NavBar';

const ProfilePage = () => {
  const [posts, setPosts] = useState([]);
  const { user, token, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push('/login');
    } else {
      fetchPosts();
    }
  }, [token, router]);

  const fetchPosts = async () => {
    try {
      const postsData = await getMyPosts(token);
      setPosts(postsData);
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
    }
  };

  const handlePostSubmit = async (newPost) => {
    try {
      const createdPost = await createPost(newPost, token);
      setPosts([createdPost, ...posts]);
    } catch (error) {
      console.error('Erro ao criar post:', error);
    }
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="md" className={styles.container}>
      <NavBar/>
      
      <Box className={styles.postSection}>
        <PostForm onPostSubmit={handlePostSubmit} />
        <PostList posts={posts} />
      </Box>
    </Container>
  );
};

export default ProfilePage;
