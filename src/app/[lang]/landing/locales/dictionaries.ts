import 'server-only'

export interface Dictionary {
    title: string
}

interface Dictionaries {
    en: () => Promise<Dictionary>
    id: () => Promise<Dictionary>
}

const dictionaries: Dictionaries = {
    en: () => import('./EN.json').then((module) => module.default),
    id: () => import('./ID.json').then((module) => module.default),
}

export const getDictionary = async (locale: keyof Dictionaries) => dictionaries[locale]()
