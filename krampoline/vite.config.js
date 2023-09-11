import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
const env = loadEnv( process.cwd(), '')

const staticServerUri = env.VITE_A || "";  

// https://vitejs.dev/config/
export default defineConfig({
  //base: `/${staticServerUri}`,
  plugins: [react()],
    resolve: {
        alias: {
          "@@": path.resolve(__dirname, "./src/"),
        },
    },
})