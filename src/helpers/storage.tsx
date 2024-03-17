'use client'
import { useEffect, useState } from 'react'

export interface StorageKey {
    key: 'token'
}

export function useLocalStorage(
    key: StorageKey['key'],
    fallbackValue: string,
    isStringify: boolean = true,
) {
    const [value, setValue] = useState<string | any>(() => {
        // Pada saat awal render, coba ambil nilai dari localStorage (jika tersedia)
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem(key)
            return stored ? (isStringify ? JSON.parse(stored) : stored) : fallbackValue
        } else {
            return fallbackValue
        }
    })

    useEffect(() => {
        // Efek untuk menyimpan nilai ke localStorage ketika nilai berubah
        if (value !== '') {
            localStorage.setItem(key, isStringify ? JSON.stringify(value) : value)
        }
    }, [key, value, isStringify])

    const clear = () => {
        // Fungsi untuk menghapus semua data dari localStorage
        localStorage.clear()
    }

    return [value, setValue, clear] as const
}
