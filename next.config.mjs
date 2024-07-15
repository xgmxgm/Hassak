/** @type {import('next').NextConfig} */

import withNextIntl from 'next-intl/plugin'

const nextIntlConfig = withNextIntl()

const nextConfig = {
	images: {
		formats: ['image/avif', 'image/webp'],
	},
}
export default nextIntlConfig(nextConfig)
