import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const defaultForm = {
  title: '',
  genre: 'Action',
  rating: 8,
  review: '',
  user: 'You'
};

const socket = io({ autoConnect: false });

export default function App() {
  const [posts, setPosts] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [form, setForm] = useState(defaultForm);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    };

    const fetchChat = async () => {
      const response = await fetch('/api/live-chat');
      const data = await response.json();
      setChatMessages(data.messages);
    };

    fetchPosts();
    fetchChat();

    socket.connect();
    socket.on('chat-message', (payload) => {
      setChatMessages((prev) => [...prev, payload]);
    });

    return () => {
      socket.off('chat-message');
      socket.disconnect();
    };
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitReview = async (event) => {
    event.preventDefault();

    const reviewPayload = {
      ...form,
      rating: Number(form.rating)
    };

    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewPayload)
    });

    const newPost = await response.json();
    setPosts((prev) => [newPost, ...prev]);
    setForm(defaultForm);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();

    if (!message.trim()) return;

    const payload = {
      user: 'You',
      text: message.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    socket.emit('chat-message', payload);
    setChatMessages((prev) => [...prev, payload]);
    setMessage('');
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Social Studio</p>
          <h1>Cinema Cricket Social</h1>
        </div>
        <div className="topbar-actions">
          <button className="pill primary">Trending</button>
          <button className="pill">Live Match</button>
        </div>
      </header>

      <main className="content-grid">
        <section className="main-panel">
          <div className="section-header">
            <h2>Movie Reviews</h2>
            <span>{posts.length} posts</span>
          </div>

          <form className="review-form" onSubmit={handleSubmitReview}>
            <div className="row">
              <input
                name="title"
                placeholder="Movie title"
                value={form.title}
                onChange={handleInputChange}
                required
              />
              <select name="genre" value={form.genre} onChange={handleInputChange}>
                <option>Action</option>
                <option>Drama</option>
                <option>Comedy</option>
                <option>Thriller</option>
                <option>Fantasy</option>
              </select>
            </div>

            <div className="row">
              <input
                name="user"
                placeholder="Your name"
                value={form.user}
                onChange={handleInputChange}
              />
              <input
                name="rating"
                type="number"
                min="1"
                max="10"
                value={form.rating}
                onChange={handleInputChange}
              />
            </div>

            <textarea
              name="review"
              placeholder="Write your review..."
              value={form.review}
              onChange={handleInputChange}
              required
            />

            <button className="primary-btn" type="submit">Post Review</button>
          </form>

          <div className="posts-list">
            {loading ? (
              <p>Loading posts...</p>
            ) : (
              posts.map((post) => (
                <article className="post-card" key={post.id}>
                  <div className="post-header">
                    <div>
                      <h3>{post.title}</h3>
                      <p>{post.user}</p>
                    </div>
                    <span className="rating-badge">⭐ {post.rating}/10</span>
                  </div>
                  <div className="tag-row">
                    <span>{post.genre}</span>
                  </div>
                  <p className="post-body">{post.review}</p>
                </article>
              ))
            )}
          </div>
        </section>

        <aside className="side-panel">
          <div className="chat-box">
            <div className="section-header">
              <h2>Cricket Live Chat</h2>
              <span>India vs Australia</span>
            </div>

            <div className="messages">
              {chatMessages.map((item, index) => (
                <div className="message" key={`${item.user}-${item.time}-${index}`}>
                  <strong>{item.user}</strong>
                  <span>{item.time}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <form className="chat-form" onSubmit={handleSendMessage}>
              <input
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Write your match comment..."
              />
              <button type="submit">Send</button>
            </form>
          </div>

          <div className="mini-cards">
            <div className="mini-card">
              <span>Top Movie</span>
              <strong>RRR</strong>
            </div>
            <div className="mini-card">
              <span>Live Score</span>
              <strong>186/4</strong>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
