// Use for plain <img> tags: <img src={asset("/images/worm.png")} alt="..." />
// Put image files in /public/images/. next/link handles basePath on its own.
export const asset = (path) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
