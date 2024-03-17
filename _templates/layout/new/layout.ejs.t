---
to: 'src/layouts/Layout<%= Name %>.tsx'
---

'use client'
import React, { PropsWithChildren } from 'react'

/**
 * @description
 *  Generate by itpohgero
 *  You can modify this layout to custom ui
 */
const Layout<%= Name %> = (props: PropsWithChildren) => {
    return (
        <main>{props?.children}</main>
    )
}

export default Layout<%= Name %>
