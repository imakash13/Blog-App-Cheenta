import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const fetchPost = async () => {
    try {
      const res = await axios.get(`https://render.com/docs/web-services#port-binding/api/posts/${id}`);
      setPost(res.data);
    } catch (err) {
      console.error('Failed to fetch post', err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`https://render.com/docs/web-services#port-binding/api/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate('/');
    } catch (err) {
        console.log(err);
        alert('Failed to delete post');
    }
  };

  if (!post) return <div>Loading...</div>;

  const user = JSON.parse(localStorage.getItem('user'));
  const isOwner = user && user._id === post.author;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {isOwner && (
        <>
          <button onClick={() => navigate(`/edit/${post._id}`)}
            className='edit-btn'>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}
