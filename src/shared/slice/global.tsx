import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type globalState = {
    color: string
}
const initialState = {
    color: 'slate',
} as globalState

export const global = createSlice({
    name: 'global',
    initialState,
    reducers: {
        reset: () => initialState,
        changeColor: (state: globalState, action: PayloadAction<globalState>) => {
            const { color } = action.payload
            state.color = color !== undefined ? color : state.color
        },
    },
})
export const { changeColor, reset } = global.actions
export default global.reducer
