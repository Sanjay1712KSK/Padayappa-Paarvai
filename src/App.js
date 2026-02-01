"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var buildTree_1 = require("./utils/buildTree");
var countNodes_1 = require("./utils/countNodes");
var TreeNode_1 = require("./TreeNode");
var Eyes_1 = require("./components/Eyes");
require("./App.css");
function App() {
    var _a = (0, react_1.useState)(null), rawNodes = _a[0], setRawNodes = _a[1];
    var _b = (0, react_1.useState)(""), query = _b[0], setQuery = _b[1];
    var _c = (0, react_1.useState)(false), caseSensitive = _c[0], setCaseSensitive = _c[1];
    var _d = (0, react_1.useState)(false), exactMatch = _d[0], setExactMatch = _d[1];
    var tree = null;
    var counts = { files: 0, folders: 0 };
    if (rawNodes) {
        tree = (0, buildTree_1.buildTree)(rawNodes);
        counts = (0, countNodes_1.countNodes)(tree);
    }
    function handleUpload(e) {
        var _a;
        var file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (!file)
            return;
        var reader = new FileReader();
        reader.onload = function () {
            try {
                var json = JSON.parse(reader.result);
                if (!Array.isArray(json.nodes)) {
                    alert("Invalid JSON format: expected { nodes: [] }");
                    return;
                }
                setRawNodes(json.nodes);
            }
            catch (_a) {
                alert("Invalid JSON file");
            }
        };
        reader.readAsText(file);
    }
    return (<div className="app-root">
      <header className="app-header" style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
        <span>👁️ Padayappa Paarvai</span>
        <div style={{ fontSize: "13px", opacity: 0.7 }}>
  See your repository with authority
    </div>

        <Eyes_1.default />
      </header>

      <div className="app-body">
        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <input type="file" accept=".json" onChange={handleUpload}/>
          </div>

          <div className="sidebar-section">
            <input className="search-input" placeholder="Search files or folders…" value={query} onChange={function (e) { return setQuery(e.target.value); }} disabled={!tree}/>
          </div>

          <div className="sidebar-section options">
            <label>
              <input type="checkbox" checked={caseSensitive} onChange={function (e) { return setCaseSensitive(e.target.checked); }}/>
              Case sensitive
            </label>

            <label>
              <input type="checkbox" checked={exactMatch} onChange={function (e) { return setExactMatch(e.target.checked); }}/>
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
          {!tree && (<p style={{ opacity: 0.7 }}>
              Upload a folder structure JSON to visualize it.
            </p>)}

          {tree && (<TreeNode_1.default node={tree} query={query} caseSensitive={caseSensitive} exactMatch={exactMatch}/>)}
        </main>
      </div>
    </div>);
}
exports.default = App;
