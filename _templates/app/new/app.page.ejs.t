---
to: 'src/app/[lang]/<%= path %>/page.tsx'
---

import { getDictionary } from './locales/dictionaries'
import Screen<%= Name %> from '@/screens/Screen<%= Name %>/Main'

export default async function Page({ params: { lang } }: any) {
    const dict = await getDictionary(lang)
    return <Screen<%= Name %> dict={dict}/>
}

