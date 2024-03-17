'use server'
import api from './axios_client'
import { AxiosResponse } from 'axios'
import { removeCookies } from '@/helpers/cookies'

interface Status {
    Code: number
    Message: string
}
interface Res {
    OK: boolean
    Kind: any | { Results: any; Status: Status }
    StatusCode: number
}

export async function get(url: string, params?: any): Promise<Res> {
    try {
        const response: AxiosResponse = await api.get(url, { params })
        return {
            OK: true,
            StatusCode: 200,
            Kind: response.data,
        }
    } catch (error: any) {
        const axiosError = error?.isAxiosError
        const StatusCode = error?.response?.status

        // handle error 401 if token not verify or expired
        // trigger logout ana clear the all localstorage and cookies
        if (axiosError && error?.response && StatusCode === 401) {
            await removeCookies('token')
        }

        if (axiosError && error?.response && StatusCode === 400) {
            return {
                OK: false,
                StatusCode: 400,
                Kind: error.response.data,
            }
        } else {
            return {
                OK: false,
                StatusCode,
                Kind: axiosError,
            }
        }
    }
}
export async function post(url: string, data: any): Promise<Res> {
    try {
        const response: AxiosResponse = await api.post(url, data)
        return {
            OK: true,
            StatusCode: 201,
            Kind: response.data,
        }
    } catch (error: any) {
        const axiosError = error?.isAxiosError
        const StatusCode = error?.response?.status

        // handle error 401 if token not verify or expired
        // trigger logout ana clear the all localstorage and cookies
        if (axiosError && error?.response && StatusCode === 401) {
            await removeCookies('token')
        }

        if (axiosError && error?.response && StatusCode === 400) {
            return {
                OK: false,
                StatusCode: 400,
                Kind: error.response.data,
            }
        } else {
            return {
                OK: false,
                StatusCode,
                Kind: axiosError,
            }
        }
    }
}

export async function put(url: string, data: any) {
    try {
        const response: AxiosResponse = await api.put(url, data)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export async function patch(url: string, data: any) {
    try {
        const response: AxiosResponse = await api.patch(url, data)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export async function del(url: string) {
    try {
        const response: AxiosResponse = await api.delete(url)
        return response.data
    } catch (error) {
        console.error(error)
    }
}
