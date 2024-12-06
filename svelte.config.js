import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		// Adapter pour le rendu statique
		adapter: adapter(),
		// Configuration des chemins
		paths: {
			base: '/sveltekit-github-pages'
		}
	}
};

export default config;
