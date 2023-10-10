import * as path from "path";
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// const env = loadEnv( process.cwd(), '')

// const staticServerUri = env.VITE_A || "";  ;




// https://vitejs.dev/config/
export default defineConfig({
  // base: `/${staticServerUri}/`,
  server: {
    port: 3000,
  },
  plugins: [react(),],
});