import axios from 'axios'

const baseURL = process.env.BASE_URL,
    isServer = typeof window === 'undefined'

const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
})

api.interceptors.request.use(async (config) => {
    if (isServer) {
        const { cookies } = await import('next/headers'),
            token = cookies().get('token')?.value

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
    } else {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
    }

    return config
})

export default api
