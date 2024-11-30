import axios from "../lib/axios";

export const postService = {
  getAllPosts: async () => {
    try {
      const response = await axios.get("/api/v1/posts");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createPost: async (postData) => {
    try {
      const response = await axios.post("/api/v1/posts/upload", postData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getPostBySlug: async (slug) => {
    try {
      const response = await axios.get(`/api/v1/posts/${slug}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updatePost: async (slug, postData) => {
    try {
      const response = await axios.put(`/api/v1/posts/${slug}`, postData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deletePost: async (slug) => {
    try {
      const response = await axios.delete(`/api/v1/posts/${slug}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
