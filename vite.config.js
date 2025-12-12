import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const config = {
    root: '.',
    define: {
      'import.meta.env.VITE_GO_BACKEND_URL': JSON.stringify(
        process.env.VITE_GO_BACKEND_URL || 'https://api.simplecheckout.ai'
      )
    },
    server: {
      port: parseInt(process.env.PORT) || 3001,
      host: true,
      open: false
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          account: resolve(__dirname, 'account.html')
        }
      }
    },
    optimizeDeps: {
      include: ['@vgs/collect-js']
    },
    resolve: {
      alias: {}
    }
  };

  return config;
});
