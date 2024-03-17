import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { JwtPayload, jwtDecode } from 'jwt-decode'
const IsValidToken = (token: any) => {
    const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_.+/=]*$/
    if (!jwtRegex.test(token?.value)) {
        return false
    }
    try {
        const decoded: any = jwtDecode<JwtPayload>(token?.value)
        const currentTimestamp = Math.floor(Date.now() / 1000)
        return decoded?.exp > currentTimestamp
    } catch (error) {
        return false
    }
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const token = request.cookies.get('token')
    const lang = pathname?.substring(1)
    const ln = `/${lang === 'en' ? 'en' : 'id'}`

    /**
     * FUNCTIONAL
     * @description
     * Module functional reusable
     */
    function ToLanding() {
        request.cookies.clear()
        return NextResponse.rewrite(new URL(`${ln}/landing`, request.url))
    }
    function ToHome() {
        return NextResponse.redirect(new URL(`${ln}/home`, request.url))
    }
    function ToSignIn() {
        return NextResponse.rewrite(new URL(`${ln}/sign-in`, request.url))
    }

    /**
     * ROOT SERVICES
     * @description
     * Middleware for authentication route
     */
    if (['/', '/id', '/en'].includes(pathname)) {
        if (token && IsValidToken(token)) {
            return ToHome()
        }
        return ToLanding()
    }

    /**
     * PROTECTED RULES
     * @description
     * Protected rules for all defined in matcher
     */
    if (!token || !IsValidToken(token)) {
        return ToSignIn()
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/', '/:lang(id|en)', '/:lang(id|en)/home',],
}
