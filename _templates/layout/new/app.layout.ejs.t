---
to: 'src/app/[lang]/<%= path %>/layout.tsx'
---

import React, { PropsWithChildren } from 'react'
import Layout<%= Name %> from '@/layouts/Layout<%= Name %>'

/**
 * @description
 *  Generate by itpohgero
 *  You can see you layout in layout path
 */
const Layout = ({ children }: PropsWithChildren) => <Layout<%= Name %>>{children}</Layout<%= Name %>>
export default Layout

