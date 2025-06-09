'use client';
import { useEffect } from 'react';

declare global {
	interface Window {
		SwaggerUIBundle: (options: {
			url?: string;
			dom_id: string;
			presets?: Array<() => unknown>;
		}) => unknown;
	}
}

export default function Home() {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js';
		script.onload = () => {
			window.SwaggerUIBundle({
				url: '/api/docs',
				dom_id: '#swagger-ui',
			});
		};
		document.body.appendChild(script);

		const style = document.createElement('link');
		style.rel = 'stylesheet';
		style.href = 'https://unpkg.com/swagger-ui-dist/swagger-ui.css';
		document.head.appendChild(style);
	}, []);

	return <div id="swagger-ui" />;
}
