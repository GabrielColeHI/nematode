// Set NEXT_PUBLIC_BASE_PATH to "/your-repo-name" when deploying to
// username.github.io/your-repo-name. Leave empty for local dev, a user site
// (username.github.io), or a custom domain. The GitHub Actions workflow sets it for you.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};
