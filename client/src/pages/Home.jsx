import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/posts');
        setPosts(res.data);
      } catch (err) {
        console.error('Error fetching posts', err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Recent Posts</h2>
      {posts.map((post) => (
        <div key={post._id} style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
          <h3>{post.title}</h3>
          <p>{post.content.slice(0, 100)}...</p>
          <Link to={`/post/${post._id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}
