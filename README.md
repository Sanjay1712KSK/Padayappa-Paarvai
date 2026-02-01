# 👁️ Padayappa Paarvai

**Padayappa Paarvai** is a web-based repository visualizer inspired by the authority and clarity of Rajinikanth’s *Padayappa*.

Upload your folder structure as a JSON file and explore your repository visually — with hierarchy, search, and control.

> *“En vazhi, thani vazhi.”*  
> See your code the Padayappa way.

---

## 🌐 Live Demo

👉 https://sanjay1712ksk.github.io/Padayappa-Paarvai/

---

## ✨ Features

- 📁 Visualize any repository structure as a tree
- 📄 Automatic file & folder count
- 🔍 Powerful search
  - Case-sensitive toggle
  - Exact vs fuzzy matching
- 🌳 Auto-expand matching paths
- 🎯 Highlighted search matches
- 👁️ Interactive UI
- ⚡ Fully client-side (no backend)

---

## 🧠 How It Works

Padayappa Paarvai does **not** read your filesystem directly.

Instead, users:

1. Export their folder structure as a JSON file  
2. Upload the JSON in the browser  
3. Instantly visualize the repository tree  

Everything runs **locally in the browser**.

---

## 📥 JSON Format

Your JSON file must follow this structure:

```json
{
  "nodes": [
    { "name": "src", "path": "src" },
    { "name": "App.tsx", "path": "src/App.tsx", "type": "file" },
    { "name": "components", "path": "src/components" }
  ]
}
```
---
## 🚀 Getting Started (Local Development)

1️⃣ Clone the repository
```
git clone https://github.com/Sanjay1712KSK/Padayappa-Paarvai.git
cd Padayappa-Paarvai
```

2️⃣ Install dependencies
```
npm install
```

3️⃣ Start the dev server
```
npm run dev
```

Open in browser:
```
http://localhost:5173/Padayappa-Paarvai/
```
---

## 🛠️ Built With

Vite

React

TypeScript

ES Modules

GitHub Pages

---

## 🎯 Use Cases

Understanding large repositories

Visualizing unfamiliar codebases

Teaching folder structures

Portfolio and documentation tooling

---

## 📌 Design Philosophy

Simple and readable

No backend, no tracking

User owns their data

Inspired by authority, clarity, and structure

---

## 🧑‍💻 Author

Sanjay Kumar S

SRM University – KTR Campus

LinkedIn: https://www.linkedin.com/in/sanjaykumarksk/

GitHub: https://github.com/Sanjay1712KSK

---

## 📄 License

This project is licensed under the MIT License.

## ⭐ Support

If you find this project useful:

## ⭐ Star the repository

🍴 Fork it

📢 Share it

---

## 🔮 Ongoing Development

Padayappa Paarvai is actively under development.

New features, performance improvements, and usability enhancements are continuously being explored to make it even easier to understand, analyze, and maintain complex project directory structures.

Feedback, suggestions, and ideas are always welcome.
