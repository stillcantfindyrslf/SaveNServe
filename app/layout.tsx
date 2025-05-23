'use client';

import { Montserrat } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import useAuthStore from "@/store/useAuthStore";
import { useEffect } from "react";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { subscribeToAuthChanges } = useAuthStore();

	useEffect(() => {
		subscribeToAuthChanges();
	}, [subscribeToAuthChanges]);

	return (
		<html lang="ru" className="bg-background-color">
			<body
				className={`${montserrat.variable}`}
			>
				<NextUIProvider>
					<Toaster position='bottom-right' richColors closeButton expand visibleToasts={1} duration={3000} />
					<div className="max-w-7xl mx-auto px-5">
						{children}
					</div>
					<Footer />
				</NextUIProvider>
			</body>
		</html>
	);
}