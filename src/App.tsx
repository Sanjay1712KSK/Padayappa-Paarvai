import { useState } from "react";
import { buildTree } from "./utils/buildTree";
import { countNodes } from "./utils/countNodes";
import TreeNode from "./TreeNode";
import Eyes from "./components/Eyes";
import "./App.css";


function App() {
  const [rawNodes, setRawNodes] = useState<any[] | null>(null);
  const [query, setQuery] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [exactMatch, setExactMatch] = useState(false);
  
  let tree = null;
  let counts = { files: 0, folders: 0 };

  if (rawNodes) {
    tree = buildTree(rawNodes);
    counts = countNodes(tree);
  }

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result as string);
        if (!Array.isArray(json.nodes)) {
          alert("Invalid JSON format: expected { nodes: [] }");
          return;
        }
        setRawNodes(json.nodes);
      } catch {
        alert("Invalid JSON file");
      }
    };
    reader.readAsText(file);
  }

  return (
    <div className="app-root">
      <header
        className="app-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>👁️ Padayappa Paarvai</span>
        <div style={{ fontSize: "13px", opacity: 0.7 }}>
  See your repository with authority
</div>

        <Eyes />
      </header>

      <div className="app-body">
        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <input type="file" accept=".json" onChange={handleUpload} />
          </div>

          <div className="sidebar-section">
            <input
              className="search-input"
              placeholder="Search files or folders…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={!tree}
            />
          </div>

          <div className="sidebar-section options">
            <label>
              <input
                type="checkbox"
                checked={caseSensitive}
                onChange={(e) => setCaseSensitive(e.target.checked)}
              />
              Case sensitive
            </label>

            <label>
              <input
                type="checkbox"
                checked={exactMatch}
                onChange={(e) => setExactMatch(e.target.checked)}
              />
              Exact match
            </label>
          </div>

          <div className="sidebar-section stats">
            <div>📄 Files: {counts.files}</div>
            <div>📁 Folders: {counts.folders}</div>
          </div>
        </aside>

        {/* MAIN TREE VIEW */}
        <main className="tree-panel">
          {!tree && (
            <p style={{ opacity: 0.7 }}>
              Upload a folder structure JSON to visualize it.
            </p>
          )}

          {tree && (
            <TreeNode
              node={tree}
              query={query}
              caseSensitive={caseSensitive}
              exactMatch={exactMatch}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
