import * as path from 'path';

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],
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
