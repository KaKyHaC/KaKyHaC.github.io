import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: '/',
  plugins: [
    {
      name: 'project-detail-rewrite',
      apply: 'serve',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && /^\/projects\/[^./]+\/?(?:\?.*)?$/.test(req.url)) {
            req.url = '/project.html';
          }
          next();
        });
      },
      transformIndexHtml(html, ctx) {
        if (ctx.originalUrl && ctx.originalUrl.startsWith('/projects/')) {
          const match = ctx.originalUrl.match(/\/projects\/([^/?#]+)/);
          const rawId = match ? match[1] : '';
          const title = rawId ? rawId.replace(/[-_]/g, ' ') : 'Project';
          return html
            .replaceAll('<!-- __PROJECT_SCHEMA__ -->', '')
            .replaceAll('__PROJECT_SCHEMA__', '')
            .replaceAll('__PROJECT_TITLE__', title);
        }
        return html
          .replaceAll('<!-- __PROJECT_SCHEMA__ -->', '')
          .replaceAll('__PROJECT_SCHEMA__', '');
      }
    }
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        project: resolve(import.meta.dirname, 'project.html'),
      },
    },
  }
});
