---
to: src/hooks/Hooks<%= Name %>/Main.tsx
---

'use client'
import React from 'react';

const Hooks<%= Name %>  = () => {
  const [state, setState] = React.useState<any>()
  return {state, setState}
};

export default Hooks<%= Name %> ;


