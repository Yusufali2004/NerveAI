<div align="center">

<h1>⚡ NerveAI</h1>

<p><strong>AI-Powered Mock Interview & Virtual Internship Platform for SDE Preparation</strong></p>

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/Yusufali2004/NerveAI/blob/main/LICENSE)
[![GSSoC 2026](https://img.shields.io/badge/GSSoC-2026-orange?logo=girlscript)](https://gssoc.girlscript.tech/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Yusufali2004/NerveAI/pulls)
[![Stars](https://img.shields.io/github/stars/Yusufali2004/NerveAI?style=social)](https://github.com/Yusufali2004/NerveAI/stargazers)
[![TypeScript](https://img.shields.io/badge/TypeScript-21.9%25-blue?logo=typescript)](https://github.com/Yusufali2004/NerveAI)

<br/>

> NerveAI bridges the gap between academic learning and industry readiness — combining AI-driven interview practice with structured, real-world project experience to help CS students land their first SDE role.

<br/>

[Features](#-features) · [Tech Stack](#-tech-stack) · [Getting Started](#-getting-started) · [Project Structure](#-project-structure) · [Contributing](#-contributing) · [Roadmap](#-roadmap)

</div>

---

## 🎯 What is NerveAI?

Most CS students graduate knowing algorithms but struggle in real interviews and have no industry project experience. **NerveAI** solves both problems in one platform:

- 🎤 **Practice interviews** with an AI that gives you real, personalized feedback
- 🏗️ **Build industry-level projects** through a guided virtual internship program
- 📜 **Earn a certificate** that you can actually put on your resume

---

## ✨ Features

### 🤖 AI Mock Interview Engine
Generate dynamic technical questions tailored to your skill level. Get instant, personalized feedback powered by large language models — no waiting for a human reviewer.

### 💼 Virtual Internship Program (5 Industry Projects)
A structured, 5-track pathway designed to mirror how real engineering teams work:

| Track | What You Build |
|---|---|
| 🎨 **Frontend** | Responsive UI with React + TypeScript |
| ⚙️ **Backend** | RESTful APIs with Node.js + Express |
| 🗄️ **Database** | Schema design & queries with PostgreSQL |
| 🔌 **API Development** | Integration, authentication, and testing |
| 🤖 **AI Integration** | LLM-powered features using OpenAI / Gemini |

### 📜 Smart Certificate Generation
Auto-generate certificates upon completing internship modules — shareable, downloadable, and ready for LinkedIn.

### 📊 Performance Dashboard
Track your progress, strengths, and improvement areas across both mock interviews and internship projects — all in one place.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React · TypeScript · Vite · Tailwind CSS |
| **Backend** | Node.js · Express · TypeScript |
| **Database** | PostgreSQL · Prisma / Kysely |
| **AI** | OpenAI API · Gemini API · LangChain |
| **Communication** | Axios · RESTful APIs |

---

## 📂 Project Structure

```
nerve-ai/
├── frontend/          # React + TypeScript (Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── hooks/
├── backend/           # Node.js + Express (TypeScript)
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── services/
├── notes/             # Contributor logs & technical documentation
└── docs/              # UI mockups and database schemas
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **PostgreSQL** (local instance or Docker)
- An **OpenAI** or **Gemini** API key

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/Yusufali2004/NerveAI.git
cd NerveAI
```

**2. Setup Backend**
```bash
cd backend
cp .env.example .env      # Add your API keys and DB URL
npm install
npm run dev
```

**3. Setup Frontend**
```bash
cd ../frontend
npm install
npm run dev
```

**4. Open in browser**
```
http://localhost:5173
```

---

## 🤝 Contributing (GSSoC 2026)

This project is part of **[GirlScript Summer of Code 2026](https://gssoc.girlscript.tech/)** and is open to contributors of all skill levels — especially beginners!

### How to Contribute

**Step 1 — Find an issue**

Look for labels like `good-first-issue`, `GSSoC-26`, or `help-wanted` on the [Issues page](https://github.com/Yusufali2004/NerveAI/issues).

**Step 2 — Fork and branch**
```bash
git checkout -b feat/your-feature-name
```

**Step 3 — Document your work**

Add a file in `/notes` using your GitHub username:
```
notes/your-username.md
```
Include what you worked on, decisions made, and any blockers.

**Step 4 — Submit a Pull Request**

Make sure your PR:
- Follows TypeScript best practices
- Has meaningful comments and clean code
- References the issue it closes (e.g., `Closes #12`)

### Coding Standards

- Use TypeScript — avoid `any` types
- Follow the existing folder structure
- Keep components small and single-responsibility
- Write meaningful commit messages

---

## 🗺 Roadmap

- [x] Project scaffold (frontend + backend + database)
- [ ] Authentication system (JWT-based)
- [ ] AI Interview Engine v1
- [ ] Virtual Internship tracker
- [ ] Certificate generation module
- [ ] Performance analytics dashboard
- [ ] Docker Compose setup

---

## 🌟 Support the Project

If NerveAI helps your SDE preparation, please consider giving it a ⭐ on GitHub — it helps more students discover the project and motivates contributors!

[![Star on GitHub](https://img.shields.io/github/stars/Yusufali2004/NerveAI?style=social)](https://github.com/Yusufali2004/NerveAI/stargazers)

---

## 👨‍💻 Maintainer

**Md Yusuf Ali**
Pre-final year CSE student · AI/Full-Stack Developer · Vice Chairman, IEEE CS Bangalore Chapter

[![GitHub](https://img.shields.io/badge/GitHub-Yusufali2004-black?logo=github)](https://github.com/Yusufali2004)

---

## 📄 License

This project is licensed under the **[MIT License](./LICENSE)** — free to use, modify, and distribute.

---

<div align="center">
<sub>Built with ❤️ for the open-source community · GSSoC 2026</sub>
</div>