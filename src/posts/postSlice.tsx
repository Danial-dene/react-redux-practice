import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', name: 'Danial', content: 'Hello!' },
    { id: '2', name: 'Hakim', content: 'More text' }
    ]

    const postSlice = createSlice({
        name:'posts',
        initialState,
        reducers: {
            postFirst(state, action){
                state.push(action.payload)
            }
        }
    })

    export const { postFirst } = postSlice.actions
    export default postSlice.reducer