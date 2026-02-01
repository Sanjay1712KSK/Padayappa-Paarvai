type RawNode = {
  name: string;
  path: string;
  type?: string;
};

type TreeNode = {
  name: string;
  path: string;
  type: "folder" | "file";
  children: TreeNode[];
};

function inferType(node: RawNode): "file" | "folder" {
  // If extension exists → file
  if (node.name.includes(".")) return "file";
  return "folder";
}

export function buildTree(rawNodes: RawNode[]): TreeNode {
  const map = new Map<string, TreeNode>();

  // ✅ DEDUPE by path
  rawNodes.forEach((node) => {
    if (!map.has(node.path)) {
      map.set(node.path, {
        name: node.name,
        path: node.path,
        type: inferType(node),
        children: [],
      });
    }
  });

  let root: TreeNode | null = null;

  map.forEach((node) => {
    const parentPath = node.path.split("/").slice(0, -1).join("/");

    if (!parentPath) {
      root = node;
    } else {
      const parent = map.get(parentPath);
      if (parent && !parent.children.some(c => c.path === node.path)) {
        parent.children.push(node);
      }
    }
  });

  if (!root) {
    throw new Error("Root node not found");
  }

  return root;
}
