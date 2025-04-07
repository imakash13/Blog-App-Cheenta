import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditPost() {
  const { id } = useParams();
  const [form, setForm] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
      setForm({ title: res.data.title, content: res.data.content });
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `http://localhost:5000/api/posts/${id}`,
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Post updated');
      navigate(`/post/${id}`);
    } catch (err) {
      alert(err.response?.data?.error || 'Failed to update post');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />
      <button type="submit">Update Post</button>
    </form>
  );
}
