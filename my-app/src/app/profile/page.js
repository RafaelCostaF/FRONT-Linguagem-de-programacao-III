'use client';
import { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import PostForm from '../components/PostForm';
import Posts from '../components/Posts';
import { useAuth } from '../context/AuthContext';
import { getMyPosts, createPost } from '../util/api';
import { useRouter } from 'next/navigation';

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
    <div>
      <Typography variant="h4">{user.fullName}'s Profile</Typography>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
      <PostForm onPostSubmit={handlePostSubmit} />
      <Posts posts={posts} />
    </div>
  );
};

export default ProfilePage;
