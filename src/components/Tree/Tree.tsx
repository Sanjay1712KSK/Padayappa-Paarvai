import { useState } from "react";

export default function TreeNode({ node }: any) {
  const [open, setOpen] = useState(false);

  if (node.type === "file") {
    return <div style={{ marginLeft: 24 }}>📄 {node.name}</div>;
  }

  return (
    <div style={{ marginLeft: 16 }}>
      <div
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer", fontWeight: 600 }}
      >
        {open ? "📂" : "📁"} {node.name}
      </div>

      {open &&
        node.children.map((child: any) => (
          <TreeNode key={child.path} node={child} />
        ))}
    </div>
  );
}
