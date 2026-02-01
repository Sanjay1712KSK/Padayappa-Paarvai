import fs from "node:fs";
import path from "node:path";

/**
 * Folders / files to ignore
 */
const IGNORE = new Set([
  "node_modules",
  ".git",
  ".vscode",
  "dist",
  "build",
  ".next",
  ".env"
]);

/**
 * Recursively walk directory
 */
function walk(dir) {
  const stats = fs.statSync(dir);

  if (!stats.isDirectory()) {
    return {
      name: path.basename(dir),
      type: "file"
    };
  }

  const name = path.basename(dir);

  if (IGNORE.has(name)) return null;

  const children = fs
    .readdirSync(dir)
    .map((child) => walk(path.join(dir, child)))
    .filter(Boolean);

  return {
    name,
    type: "folder",
    children
  };
}

/**
 * Entry point
 */
const TARGET_DIR = process.argv[2] || ".";
const OUTPUT = "src/data/folderStructure.json";

const tree = walk(path.resolve(TARGET_DIR));

fs.writeFileSync(OUTPUT, JSON.stringify(tree, null, 2));

console.log(`✅ Folder structure written to ${OUTPUT}`);
