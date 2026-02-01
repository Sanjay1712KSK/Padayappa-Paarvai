"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TreeNode;
var react_1 = require("react");
function TreeNode(_a) {
    var node = _a.node;
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    if (node.type === "file") {
        return <div style={{ marginLeft: 24 }}>📄 {node.name}</div>;
    }
    return (<div style={{ marginLeft: 16 }}>
      <div onClick={function () { return setOpen(!open); }} style={{ cursor: "pointer", fontWeight: 600 }}>
        {open ? "📂" : "📁"} {node.name}
      </div>

      {open &&
            node.children.map(function (child) { return (<TreeNode key={child.path} node={child}/>); })}
    </div>);
}
