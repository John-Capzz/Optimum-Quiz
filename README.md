# 🧠 Optimum Community Trivia Quiz

Real-time multiplayer quiz for the Optimum community. 35 questions across Tech, Team, Milestones & Community categories.

---

## 🚀 Running Locally (VS Code)

**Terminal 1 — Server:**
```bash
cd server
npm install
node index.js
```

**Terminal 2 — Client:**
```bash
cd client
npm install
npm start
```

App opens at **http://localhost:3000**

---

## 🔑 Host Password

The host dashboard is protected by a password. Default: `optimum2024`

To change it, edit `server/.env`:
```
HOST_PASSWORD=yournewpassword
```

**How it works:**
- Anyone can join as a player just by entering their name
- To access the host dashboard (game settings, start button), click **"I am the host"** on the join screen and enter the password
- The password is verified server-side — players see zero host controls
- If the server restarts, just re-enter the password to reclaim host

---

## 🌐 Deploying Live (Railway — recommended for Socket.io)

1. Push the `server` folder to a GitHub repo
2. Go to [railway.app](https://railway.app) → New Project → Deploy from GitHub
3. Set environment variables in Railway dashboard:
   ```
   HOST_PASSWORD=yourchosenpassword
   PORT=3001
   ```
4. Railway gives you a live URL like `https://optimum-quiz.up.railway.app`

5. In `client/src/App.js`, update the socket URL:
   ```js
   const SOCKET_URL = process.env.REACT_APP_SERVER_URL || "https://your-railway-url.up.railway.app";
   ```
   Or set `REACT_APP_SERVER_URL` as an env variable in your client build.

6. Deploy the `client` folder to [Vercel](https://vercel.com) or [Netlify](https://netlify.com):
   - Build command: `npm run build`
   - Output directory: `build`
   - Add env var: `REACT_APP_SERVER_URL=https://your-railway-url.up.railway.app`

---

## 🎮 How to Play

1. Share the live URL with your community
2. **You** open the link, enter your name, click **"I am the host"**, enter the password
3. Community members open the link and just enter their name — they see the waiting room
4. You configure question count + categories and hit **START GAME**
5. Everyone answers within 20 seconds — faster correct answers = more points (300–1000)
6. Leaderboard updates live after each question
7. After the final screen, you hit **PLAY AGAIN** to reset

---

## ➕ Adding Questions

Edit `server/questions.js`:
```js
{
  id: 36,
  category: "Community",   // Tech | Team | Milestones | Community
  question: "Your question?",
  options: ["A", "B", "C", "D"],
  answer: 0,               // index of correct option
  explanation: "Fun fact!"
}
```
Restart server after changes.

---

## 🛠 Stack
- **Server:** Node.js + Express + Socket.io + dotenv
- **Client:** React 18
- **Realtime:** WebSockets via Socket.io
- **Auth:** Password verified server-side, stored in sessionStorage client-side (survives refresh, not new tab)
