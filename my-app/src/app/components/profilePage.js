'use client'
import React, { useState } from 'react';
import PostForm from './PostForm';
import Posts from './Posts';

const ProfilePage = () => {
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      <h1>User Profile</h1>
      <PostForm onPostSubmit={handlePostSubmit} />
      {posts.map((post) => (
        <Posts
          key={post.id}
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
    </div>
  );
};

export default ProfilePage;
