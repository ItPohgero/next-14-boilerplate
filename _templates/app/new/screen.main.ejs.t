---
to: src/screens/Screen<%= Name %>/Main.tsx
---

'use client'
import React, {Fragment} from 'react';
import Hooks<%= Name %> from '@/hooks/Hooks<%= Name %>/Main'
import { Dictionary } from '@/app/[lang]/<%= path %>/locales/dictionaries';

interface Props {
  dict: Dictionary
}

const Screen<%= Name %>  = ({ dict }: Props) => {
const {state, setState} = Hooks<%= Name %>()
  return (
    <Fragment>
      <div>{dict?.title}</div>
      {/* Your component code goes here */}
    </Fragment>
  );
};

export default Screen<%= Name %> ;


