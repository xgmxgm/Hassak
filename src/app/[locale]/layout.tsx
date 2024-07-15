import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import type { Metadata } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'TEO BUILDING',
	description: 'TEO BUILDING',
}

type Props = {
	children: React.ReactNode
	params: {
		locale: 'ru' | 'kz'
	}
}

const RootLayout: React.FC<Props> = ({ children, params: { locale } }) => {
	const messages = useMessages()

	return (
		<html lang={locale}>
			<body className={inter.className}>
				<NextIntlClientProvider messages={messages}>
					<header>
						<Header />
					</header>
					<main>{children}</main>
					<footer>
						<Footer />
					</footer>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}

export default RootLayout
