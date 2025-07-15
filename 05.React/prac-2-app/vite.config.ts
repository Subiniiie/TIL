import * as path from 'path';

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSvgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginSvgr()],
  resolve: {
    alias: [{
      find: "@src",
      replacement: path.resolve(__dirname, "src")
    },
    {
      find: "@components",
      replacement: path.resolve(__dirname, "src/components")
    }
  ]
  }
})
