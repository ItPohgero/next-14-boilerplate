---
to: src/shared/store.tsx
inject: true
after: "import globalReducer from '@/shared/slice/global'"
---
import <%= name %>Reducer from '@/shared/slice/<%= name %>'