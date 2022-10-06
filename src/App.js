import React from 'react';
import './style.css';
import axios from 'axios';

const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    client.get('/1').then((response) => {
      setPost(response.data);
    });
  }, []);

  function deletePost() {
    client.delete('/1').then((response) => {
      alert('Post deleted!');
      setPost(null);
    });
  }

  if (!post) return 'No post!';

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={deletePost}>Delete Post </button>
    </div>
  );
}
