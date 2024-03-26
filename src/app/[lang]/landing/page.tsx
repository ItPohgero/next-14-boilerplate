import { getDictionary } from './locales/dictionaries'
import ScreenLanding from '@/screens/ScreenLanding/Main'

export default async function Page({ params: { lang } }: any) {
    const dict = await getDictionary(lang)
    return <ScreenLanding dict={dict}/>
}

