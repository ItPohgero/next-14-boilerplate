---
to: src/shared/slice/<%= name %>.tsx
---
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state type
export interface <%= name %>State {
    state: string;
}

// Define initial state
const initialState: <%= name %>State = {
    state: 'initial_state_value',
};

// Create the slice
const <%= name %>Slice = createSlice({
    name: '<%= name %>',
    initialState,
    reducers: {
        reset: () => initialState,
        changeState: (state: <%= name %>State, action: PayloadAction<string>) => {
            state.state = action.payload;
        },
    },
});

// Extract the action creators and reducer
export const { changeState, reset } = <%= name %>Slice.actions;
export default <%= name %>Slice.reducer;
