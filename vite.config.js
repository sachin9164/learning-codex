import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserPagesRepository = repositoryName?.endsWith('.github.io');
const base = process.env.GITHUB_ACTIONS === 'true' && repositoryName && !isUserPagesRepository
  ? `/${repositoryName}/`
  : '/';

export default defineConfig({
  plugins: [react()],
  base,
});
