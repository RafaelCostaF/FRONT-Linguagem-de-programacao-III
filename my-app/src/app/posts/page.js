'use client';
import { useState, useEffect } from 'react';
import { Button, Typography, Container } from '@mui/material';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import { getAllPosts, createPost } from '../util/api';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const { token } = useAuth();
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
      const postsData = await getAllPosts(token);
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

  return (
    <Container>
      <Typography variant="h4">Posts</Typography>
      <PostForm onPostSubmit={handlePostSubmit} />
      <PostList posts={posts} />
    </Container>
  );
};

export default PostsPage;
