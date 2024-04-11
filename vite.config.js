import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Resolve "components/" to the absolute path of the components directory
      components: path.resolve(__dirname, 'src/components'),
    },
  },
});
