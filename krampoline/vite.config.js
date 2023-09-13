import * as path from "path";
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const env = loadEnv( process.cwd(), '')

const staticServerUri = env.VITE_A || "";  ;




// https://vitejs.dev/config/
export default defineConfig({
  base: `/${staticServerUri}/`,
  server: {
    port: 3000,
  },
  plugins: [
    // rollupReplace({
    //   preventAssignment: true,
    //   values: {
    //     __DEV__: JSON.stringify(true),
    //     "process.env.NODE_ENV": JSON.stringify("development"),
    //   },
    // }),
    react(),
  ],
});