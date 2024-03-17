'use client'
import { store } from '@/shared/store'
import { Provider } from 'react-redux'

export function ProviderReduxToolkit({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>
}
