import { useState, useEffect } from "react";
import "./Tree.css";

/**
 * Compare text based on search options
 */
function matches(
  text: string,
  query: string,
  caseSensitive: boolean,
  exactMatch: boolean
) {
  if (!query) return true;

  const source = caseSensitive ? text : text.toLowerCase();
  const q = caseSensitive ? query : query.toLowerCase();

  return exactMatch ? source === q : source.includes(q);
}

/**
 * Check if node or ANY descendant matches
 */
function hasMatchDeep(
  node: any,
  query: string,
  caseSensitive: boolean,
  exactMatch: boolean
): boolean {
  if (!query) return true;

  if (matches(node.name, query, caseSensitive, exactMatch)) {
    return true;
  }

  if (!node.children) return false;

  return node.children.some((child: any) =>
    hasMatchDeep(child, query, caseSensitive, exactMatch)
  );
}

/**
 * Highlight matched text (CORRECT + STABLE)
 */
function highlightText(
  text: string,
  query: string,
  caseSensitive: boolean,
  exactMatch: boolean
) {
  if (!query) return text;

  const source = caseSensitive ? text : text.toLowerCase();
  const q = caseSensitive ? query : query.toLowerCase();

  // Exact match → highlight ONLY if full text matches
  if (exactMatch) {
    if (source !== q) return text;

    return (
      <span style={{ color: "#fde047", fontWeight: 700 }}>
        {text}
      </span>
    );
  }

  // Fuzzy match → highlight FIRST occurrence only
  const index = source.indexOf(q);
  if (index === -1) return text;

  const before = text.slice(0, index);
  const match = text.slice(index, index + query.length);
  const after = text.slice(index + query.length);

  return (
    <span>
      {before}
      <span style={{ color: "#fde047", fontWeight: 700 }}>
        {match}
      </span>
      {after}
    </span>
  );
}

export default function TreeNode({
  node,
  query = "",
  caseSensitive = false,
  exactMatch = false,
}: {
  node: any;
  query?: string;
  caseSensitive?: boolean;
  exactMatch?: boolean;
}) {
  const [open, setOpen] = useState(false);

  const matchesDeep = hasMatchDeep(
    node,
    query,
    caseSensitive,
    exactMatch
  );

  // Auto-expand folders during search
  useEffect(() => {
    if (query && matchesDeep) setOpen(true);
    if (!query) setOpen(false);
  }, [query, matchesDeep]);

  // FILE
  if (node.type === "file") {
    if (
      query &&
      !matches(node.name, query, caseSensitive, exactMatch)
    ) {
      return null;
    }

    return (
      <div className="tree-file">
        📄{" "}
        {highlightText(
          node.name,
          query,
          caseSensitive,
          exactMatch
        )}
      </div>
    );
  }

  // FOLDER
  return (
    <div className="tree-node">
      <div
        className="tree-folder"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? "📂" : "📁"}{" "}
        {highlightText(
          node.name,
          query,
          caseSensitive,
          exactMatch
        )}
      </div>

      <div
  className={`tree-children-wrapper ${
    open ? "expanded" : "collapsed"
  }`}
>
  <div className="tree-children">
    {node.children
      .filter((child: any) =>
        query
          ? hasMatchDeep(
              child,
              query,
              caseSensitive,
              exactMatch
            )
          : true
      )
      .map((child: any) => (
        <TreeNode
          key={child.path}
          node={child}
          query={query}
          caseSensitive={caseSensitive}
          exactMatch={exactMatch}
        />
      ))}
  </div>
</div>

    </div>
  );
}
