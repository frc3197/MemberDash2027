import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

export default {
  // Config options...
  basename: process.env.GITHUB_PAGES === "true" ? "/MemberDash2027" : "/",
  ssr: false,
  presets: [vercelPreset()],
} satisfies Config;
