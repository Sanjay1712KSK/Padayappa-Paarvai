👁️ Padayappa Paarvai

Padayappa Paarvai is a web-based repository visualizer inspired by the authority and clarity of Rajinikanth’s Padayappa.

Upload your folder structure as a JSON file and explore your repository visually — with hierarchy, search, and control.

“En vazhi, thani vazhi.”
See your code the Padayappa way.

🌐 Live Demo

👉 https://sanjay1712ksk.github.io/Padayappa-Paarvai/

✨ Features

📁 Visualize any repository structure as a tree

📄 Automatic file & folder count

🔍 Powerful search:

Case-sensitive toggle

Exact vs fuzzy matching

🌳 Auto-expand matching paths

🎯 Highlighted search matches

👁️ Interactive UI with modern layout

⚡ Fully client-side (no backend, no server)

🧠 How It Works

Padayappa Paarvai does not read your filesystem directly.

Instead, users:

Export their folder structure as a JSON file

Upload the JSON in the browser

Instantly visualize the repository tree

Everything runs locally in the browser.

📥 JSON Format

Your JSON file must follow this structure:

{
  "nodes": [
    { "name": "src", "path": "src" },
    { "name": "App.tsx", "path": "src/App.tsx", "type": "file" },
    { "name": "components", "path": "src/components" }
  ]
}


name → file or folder name

path → full path from root

type → optional (file or folder)

You can generate this JSON using VS Code extensions or custom scripts.

🚀 Getting Started (Local Development)
1️⃣ Clone the repository
git clone https://github.com/Sanjay1712KSK/Padayappa-Paarvai.git
cd Padayappa-Paarvai

2️⃣ Install dependencies
npm install

3️⃣ Start the dev server
npm run dev


Open:

http://localhost:5173/Padayappa-Paarvai/

🛠️ Built With

Vite

React

TypeScript

ES Modules

GitHub Pages

🎯 Use Cases

Understand large repositories quickly

Visualize unfamiliar codebases

Teaching folder structures

Portfolio / documentation tooling

Lightweight repo analysis

📌 Design Philosophy

Simple, readable, and fast

No backend, no tracking

User controls their own data

Inspired by authority, clarity, and structure

🧑‍💻 Author

Sanju
SRM University, KTR Campus
GitHub: https://github.com/Sanjay1712KSK

📄 License

This project is licensed under the MIT License.

⭐ If You Like This Project

Give it a ⭐ on GitHub

Share it with friends

Use it in your own workflow

👁️ Padayappa Paarvai — See your repository with authority.
