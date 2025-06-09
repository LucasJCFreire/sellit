import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import './globals.css';

export const metadata: Metadata = {
	title: 'Sellit Challenge',
	description: 'API Rest',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<ToastContainer />
				{children}
			</body>
		</html>
	);
}
