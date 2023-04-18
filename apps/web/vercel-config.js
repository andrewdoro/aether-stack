// scripts/vercel-config.js
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configPath = path.join(__dirname, ".vercel/output/config.json");
const existingConfig = JSON.parse(await fs.readFile(configPath, "utf-8"));

const newConfig = {
  ...existingConfig,
  version: 3,
  images: {
    sizes: [640, 750, 828, 1080, 1200],
    minimumCacheTTL: 60,
    domains: ["picsum.photos"],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },
};

// write the new config file
await fs.writeFile(configPath, JSON.stringify(newConfig, null, 2));
