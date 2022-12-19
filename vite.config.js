import { defineConfig } from 'vite';

export default defineConfig(({ ssrBuild }) => {
	return {
		build: {
			outDir: ssrBuild ? 'dist/server' : 'dist/client',
			rollupOptions: {
				input: 'src/index.js',
				output: {
					entryFileNames: 'entries/[name]-[hash].js',
					chunkFileNames: 'chunks/[name]-[hash].js',
					assetFileNames: 'assets/[name]-[hash].[ext]'
				}
			}
		}
	};
});
