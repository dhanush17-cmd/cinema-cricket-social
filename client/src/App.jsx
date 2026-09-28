const stories = [
  { name: 'RRR', accent: '#ff7b54' },
  { name: 'NTR', accent: '#fbbf24' },
  { name: 'Kantara', accent: '#34d399' },
  { name: 'Pushpa', accent: '#60a5fa' },
  { name: 'Shershaah', accent: '#c084fc' },
  { name: 'Live', accent: '#f87171' }
];

const posts = [
  {
    id: 1,
    user: 'Aarav',
    handle: '@aaravcinema',
    movie: 'RRR',
    caption: 'Pure goosebumps from start to finish. The energy, music, and emotion hit hard!',
    likes: '12.4k',
    comments: 842,
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80',
    badge: 'Top Rated'
  },
  {
    id: 2,
    user: 'Nisha',
    handle: '@cricketpulse',
    movie: 'Kantara',
    caption: 'The cultural storytelling is unreal. Feels raw, powerful, and unforgettable.',
    likes: '9.8k',
    comments: 540,
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80',
    badge: 'New Review'
  },
  {
    id: 3,
    user: 'Vikram',
    handle: '@matchdaybuzz',
    movie: 'Pushpa',
    caption: 'Massy, stylish, and full of attitude. This one is perfect for a rewatch.',
    likes: '15.2k',
    comments: 920,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
    badge: 'Trending'
  }
];

const chatMessages = [
  { user: 'Rohit', text: 'India is dominating this spell!', time: '19:30' },
  { user: 'Aisha', text: 'That over was too expensive for the bowlers.', time: '19:31' },
  { user: 'Karan', text: 'The crowd is absolutely buzzing tonight.', time: '19:32' },
  { user: 'Meera', text: 'This is a classic chase situation now.', time: '19:33' }
];

const trendingTags = ['#RRR', '#CricketLive', '#Bollywood', '#MatchBuzz', '#MovieNight'];

export default function App() {
  return (
    <div className="instagram-shell">
      <header className="top-nav">
        <div className="brand-wrap">
          <div className="brand-mark">C</div>
          <div>
            <p className="brand-label">Cinema</p>
            <h1>CricFlix</h1>
          </div>
        </div>

        <div className="search-box">
          <span>⌕</span>
          <input placeholder="Search movies, players, trends" />
        </div>

        <div className="nav-actions">
          <button className="nav-btn active">Home</button>
          <button className="nav-btn">Reels</button>
          <button className="nav-btn">Messages</button>
          <button className="nav-btn profile-pill">Profile</button>
        </div>
      </header>

      <main className="main-layout">
        <section className="feed-column">
          <div className="story-row">
            {stories.map((story) => (
              <div key={story.name} className="story">
                <div className="story-ring" style={{ background: story.accent }}>
                  <div className="story-avatar" />
                </div>
                <span>{story.name}</span>
              </div>
            ))}
          </div>

          <div className="composer">
            <div className="composer-avatar" />
            <input placeholder="Share your movie review or match opinion..." />
            <button>Post</button>
          </div>

          {posts.map((post) => (
            <article key={post.id} className="post-card">
              <div className="post-header">
                <div className="user-meta">
                  <div className="avatar small" />
                  <div>
                    <h3>{post.user}</h3>
                    <p>{post.handle}</p>
                  </div>
                </div>
                <span className="post-badge">{post.badge}</span>
              </div>

              <img className="post-image" src={post.image} alt={post.movie} />

              <div className="post-actions">
                <span>♡</span>
                <span>💬</span>
                <span>✈</span>
                <span className="save">🔖</span>
              </div>

              <div className="post-content">
                <p className="likes">{post.likes} likes</p>
                <p>
                  <strong>{post.user}</strong> {post.caption}
                </p>
                <p className="comment-link">View all {post.comments} comments</p>
              </div>
            </article>
          ))}
        </section>

        <aside className="sidebar-column">
          <div className="profile-card">
            <div className="profile-head">
              <div className="avatar large" />
              <div>
                <h3>@cinemacric</h3>
                <p>Movie + Match Community</p>
              </div>
            </div>
            <div className="stats-row">
              <div><strong>8.4K</strong><span>Followers</span></div>
              <div><strong>1.2K</strong><span>Posts</span></div>
              <div><strong>496</strong><span>Matches</span></div>
            </div>
          </div>

          <div className="match-card">
            <div className="match-header">
              <div>
                <p className="tiny-tag">LIVE</p>
                <h3>India vs Australia</h3>
              </div>
              <span className="live-dot" />
            </div>

            <div className="score-row">
              <div>
                <strong>India</strong>
                <span>186/4</span>
              </div>
              <div className="versus">VS</div>
              <div>
                <strong>Aus</strong>
                <span>172/8</span>
              </div>
            </div>
          </div>

          <div className="chat-card">
            <div className="chat-header">
              <h3>Cricket Live Chat</h3>
              <span>12k online</span>
            </div>

            <div className="message-list">
              {chatMessages.map((message, index) => (
                <div className="chat-message" key={`${message.user}-${index}`}>
                  <strong>{message.user}</strong>
                  <span>{message.time}</span>
                  <p>{message.text}</p>
                </div>
              ))}
            </div>

            <div className="chat-input-row">
              <input placeholder="Say something about the match..." />
              <button>Send</button>
            </div>
          </div>

          <div className="trend-card">
            <h3>Trending now</h3>
            <div className="tags-list">
              {trendingTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
