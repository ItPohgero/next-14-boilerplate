import { getDictionary } from './locales/dictionaries'
import ScreenAbout from '@/screens/ScreenAbout/Main'

export default async function Page({ params: { lang } }: any) {
    const dict = await getDictionary(lang)
    return <ScreenAbout dict={dict}/>
}

