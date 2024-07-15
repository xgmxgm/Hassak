import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'

const nextIntlMiddleware = createMiddleware({
	locales: ['ru', 'kz'],
	defaultLocale: 'ru',
})

export default function (req: NextRequest): NextResponse {
	return nextIntlMiddleware(req)
}

export const config = {
	matcher: ['/', '/(kz|ru)/:path*'],
}
