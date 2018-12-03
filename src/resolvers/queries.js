const fetch = require('node-fetch');

const { BASE_URL } = require('../constants');

module.exports = {
  Query: {
    // posts
    getPost: (parent, args) => {
      const { id } = args;
      return fetch(`${BASE_URL}/posts/${id}`)
        .then(res => res.json())
    },
    getAllPosts: () => {
      return fetch(`${BASE_URL}/posts`)
        .then(res => res.json())
    },
    // comments
    getPostComments: (parent, args) => {
      const { id } = args;
      return fetch(`${BASE_URL}/comments?postId=${id}`)
        .then(res => res.json())
    },
    getAllComments: () => {
      return fetch(`${BASE_URL}/comments`)
        .then(res => res.json())
    },
    // albums
    getAllAlbums: () => {
      return fetch(`${BASE_URL}/albums`)
        .then(res => res.json())
    },
    // photos
    getAllPhotos: () => {
      return fetch(`${BASE_URL}/photos`)
        .then(res => res.json())
    },
    // todos
    getAllTodos: () => {
      return fetch(`${BASE_URL}/todos`)
        .then(res => res.json())
    },
    // users
    getUserPosts: (parent, args) => {
      const { id } = args;
      return fetch(`${BASE_URL}/posts?userId=${id}`)
        .then(res => res.json())
    },
    getAllUsers: () => {
      return fetch(`${BASE_URL}/users`)
        .then(res => res.json())
    },
  }
};
