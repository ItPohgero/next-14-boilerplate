'use server'

import { cookies } from 'next/headers'

interface NameCookies {
    value: 'token'
}
interface CookiesProps {
    name: NameCookies['value']
    data: string
}
export async function createCookies(props: CookiesProps) {
    cookies().set(props?.name, props?.data, { secure: true })
}

export async function getCookies(name: CookiesProps['name']) {
    return cookies().get(name)
}

export async function removeCookies(name: CookiesProps['name']) {
    cookies().delete(name)
}
