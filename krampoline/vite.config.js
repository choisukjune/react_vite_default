import { defineConfig, loadEnv } from 'vite'
import path from "path";
import react from '@vitejs/plugin-react'

const env = loadEnv( process.cwd(), '')

const staticServerUri = env.VITE_A || "";  

// https://vitejs.dev/config/
export default defineConfig({
  //base: `/${staticServerUri}`,
  plugins: [react()],
        build: {
        rollupOptions: {
            external: [
                "react", // ignore react stuff
                "react-dom",
            ],
        }
    },
})
