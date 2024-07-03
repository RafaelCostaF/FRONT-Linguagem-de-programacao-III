// utils/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/auth'; // URL base do seu backend

export const signup = async (email, password, fullName) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/signup`, {
            email,
            password,
            fullName
        });
        return response.data; // Retorna os dados do usuário cadastrado
    } catch (error) {
        console.error('Erro no cadastro:', error);
        throw error;
    }
};

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, {
            email,
            password
        });
        return response.data; // Retorna o token JWT e informações do usuário
    } catch (error) {
        console.error('Erro no login:', error);
        throw error;
    }
};





// Função para criar um novo post
export const createPost = async (postData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/posts`, postData);
        return response.data; // Retorna os dados do post criado
    } catch (error) {
        console.error('Erro ao criar post:', error);
        throw error;
    }
};

// Função para buscar todos os posts
export const getAllPosts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/posts`);
        return response.data; // Retorna a lista de posts
    } catch (error) {
        console.error('Erro ao buscar posts:', error);
        throw error;
    }
};

// Função para buscar um post pelo ID
export const getPostById = async (postId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/posts/${postId}`);
        return response.data; // Retorna os dados do post encontrado
    } catch (error) {
        console.error(`Erro ao buscar post com ID ${postId}:`, error);
        throw error;
    }
};

// Função para atualizar um post existente
export const updatePost = async (postId, postData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/posts/${postId}`, postData);
        return response.data; // Retorna os dados do post atualizado
    } catch (error) {
        console.error(`Erro ao atualizar post com ID ${postId}:`, error);
        throw error;
    }
};

// Função para excluir um post
export const deletePost = async (postId) => {
    try {
        await axios.delete(`${API_BASE_URL}/posts/${postId}`);
        console.log(`Post com ID ${postId} deletado com sucesso.`);
    } catch (error) {
        console.error(`Erro ao deletar post com ID ${postId}:`, error);
        throw error;
    }
};

