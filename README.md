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
