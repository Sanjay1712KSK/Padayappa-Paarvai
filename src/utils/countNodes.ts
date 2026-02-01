export function countNodes(node: any) {
  let files = 0;
  let folders = 0;

  function walk(n: any) {
    if (n.type === "file") files++;
    if (n.type === "folder") folders++;

    n.children?.forEach(walk);
  }

  walk(node);

  return { files, folders };
}
