:root {
  --bg: #0f172a;
  --panel: rgba(15, 23, 42, 0.8);
  --card: #111827;
  --soft: #1f2937;
  --muted: #94a3b8;
  --text: #e5eefc;
  --line: rgba(148, 163, 184, 0.18);
  --pink: #f43f5e;
  --purple: #8b5cf6;
  --lime: #34d399;
}

* {
  box-sizing: border-box;
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  min-height: 100vh;
  font-family: Inter, 'Segoe UI', sans-serif;
  background: linear-gradient(180deg, #020817 0%, #0b1120 100%);
  color: var(--text);
}

button, input {
  font: inherit;
}

button {
  cursor: pointer;
}

.instagram-shell {
  max-width: 1320px;
  margin: 0 auto;
  padding: 22px 18px 40px;
}

.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px 22px;
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid var(--line);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  position: sticky;
  top: 10px;
  z-index: 10;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-weight: 800;
  background: linear-gradient(135deg, var(--pink), var(--purple));
  box-shadow: 0 10px 30px rgba(168, 85, 247, 0.4);
}

.brand-wrap h1 {
  font-size: 1.4rem;
  margin: 0;
}

.brand-label {
  margin: 0;
  color: var(--muted);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.search-box {
  flex: 1;
  max-width: 420px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 10px 14px;
}

.search-box input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: var(--text);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-btn {
  border: 1px solid var(--line);
  background: rgba(15, 23, 42, 0.5);
  color: var(--text);
  border-radius: 12px;
  padding: 9px 14px;
}

.nav-btn.active,
.profile-pill {
  background: linear-gradient(135deg, rgba(244, 63, 94, 0.18), rgba(139, 92, 246, 0.2));
  border-color: rgba(244, 63, 94, 0.3);
}

.main-layout {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(300px, 1fr);
  gap: 24px;
  margin-top: 26px;
}

.feed-column,
.sidebar-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.story-row {
  display: flex;
  gap: 18px;
  padding: 14px 8px;
  overflow-x: auto;
}

.story {
  min-width: 78px;
  text-align: center;
  color: var(--muted);
  font-size: 0.8rem;
}

.story-ring {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin: 0 auto 8px;
  padding: 3px;
}

.story-avatar,
.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #f8fafc, #cbd5e1);
  border: 3px solid #0f172a;
}

.composer,
.post-card,
.profile-card,
.match-card,
.chat-card,
.trend-card {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: 0 18px 40px rgba(2, 6, 23, 0.22);
}

.composer {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
}

.composer-avatar,
.avatar.small,
.avatar.large {
  background: linear-gradient(135deg, #f9a8d4, #a78bfa);
  border-radius: 50%;
}

.composer-avatar {
  width: 42px;
  height: 42px;
}

.composer input {
  flex: 1;
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid var(--line);
  color: var(--text);
  border-radius: 14px;
  padding: 12px 14px;
  outline: none;
}

.composer button,
.chat-input-row button {
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 10px 16px;
  font-weight: 700;
}

.post-card {
  overflow: hidden;
  padding-bottom: 12px;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 18px 14px;
}

.user-meta {
  display: flex;
  gap: 12px;
  align-items: center;
}

.avatar.small {
  width: 42px;
  height: 42px;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.user-meta h3 {
  margin: 0;
  font-size: 0.98rem;
}

.user-meta p {
  margin: 0;
  color: var(--muted);
  font-size: 0.76rem;
}

.post-badge {
  background: rgba(52, 211, 153, 0.12);
  color: #bcf7d8;
  border: 1px solid rgba(52, 211, 153, 0.28);
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 0.72rem;
}

.post-image {
  width: 100%;
  height: 420px;
  object-fit: cover;
  display: block;
  background: #0b1220;
}

.post-actions {
  padding: 14px 18px 6px;
  display: flex;
  gap: 14px;
  font-size: 1.4rem;
}

.post-actions .save {
  margin-left: auto;
}

.post-content {
  padding: 0 18px;
}

.likes {
  margin: 0 0 8px;
  font-weight: 700;
}

.post-content p {
  margin: 0;
  color: #dfeaf7;
  line-height: 1.5;
}

.post-content strong {
  color: white;
}

.comment-link {
  margin-top: 8px !important;
  color: var(--muted) !important;
}

.profile-card,
.match-card,
.chat-card,
.trend-card {
  padding: 18px;
}

.profile-head {
  display: flex;
  align-items: center;
  gap: 14px;
}

.avatar.large {
  width: 54px;
  height: 54px;
}

.profile-head h3,
.match-header h3,
.chat-header h3,
.trend-card h3 {
  margin: 0;
}

.profile-head p,
.chat-header span,
.tiny-tag {
  margin: 4px 0 0;
  color: var(--muted);
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 18px;
}

.stats-row div {
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 12px 10px;
  text-align: center;
}

.stats-row strong,
.stats-row span {
  display: block;
}

.stats-row span {
  margin-top: 4px;
  color: var(--muted);
  font-size: 0.72rem;
}

.match-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tiny-tag {
  color: #fca5a5;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
  font-size: 0.7rem;
}

.live-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  background: #ef4444;
  box-shadow: 0 0 0 6px rgba(239, 68, 68, 0.15);
}

.score-row {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 12px;
  align-items: center;
  margin-top: 18px;
  text-align: center;
}

.score-row strong {
  display: block;
  font-size: 1.05rem;
}

.score-row span {
  color: var(--muted);
}

.versus {
  font-weight: 800;
  color: #fbbf24;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.message-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
  max-height: 240px;
  overflow-y: auto;
}

.chat-message {
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 10px 12px;
}

.chat-message strong,
.chat-message span {
  display: inline-block;
}

.chat-message span {
  float: right;
  color: var(--muted);
  font-size: 0.72rem;
}

.chat-message p {
  margin: 10px 0 0;
  color: #e2e8f0;
  line-height: 1.5;
}

.chat-input-row {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}

.chat-input-row input {
  flex: 1;
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid var(--line);
  color: var(--text);
  border-radius: 12px;
  padding: 10px 12px;
  outline: none;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
}

.tags-list span {
  background: rgba(168, 85, 247, 0.12);
  border: 1px solid rgba(168, 85, 247, 0.25);
  color: #e9d5ff;
  border-radius: 999px;
  padding: 7px 10px;
  font-size: 0.8rem;
}

@media (max-width: 980px) {
  .main-layout {
    grid-template-columns: 1fr;
  }

  .nav-actions {
    display: none;
  }
}

@media (max-width: 620px) {
  .top-nav {
    flex-wrap: wrap;
  }

  .search-box {
    order: 3;
    width: 100%;
    max-width: none;
  }

  .post-image {
    height: 320px;
  }

  .composer {
    flex-wrap: wrap;
  }

  .composer button {
    width: 100%;
  }
}
