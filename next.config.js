/** @type {import('next').NextConfig} */

// When STATIC_EXPORT=true (GitHub Pages build), emit a fully static site served
// under the /palosales subpath. The chat runs client-side from the knowledge
// base — no server, no API key. For a real server host (e.g. Vercel), leave
// STATIC_EXPORT unset and the live /api/chat route + Anthropic streaming work.
const isStaticExport = process.env.STATIC_EXPORT === "true";
const repo = "palosales";

const nextConfig = {
  reactStrictMode: true,
  ...(isStaticExport
    ? {
        output: "export",
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
        images: { unoptimized: true },
        trailingSlash: true,
      }
    : {}),
};

module.exports = nextConfig;
