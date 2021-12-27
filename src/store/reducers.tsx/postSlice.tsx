import { createSlice, nanoid } from "@reduxjs/toolkit";

//the first data to store  
const initialState = [
    {
      id:  [] = [],
      name: [] = [],
      content: [] = []
    }

    ]
    
    //slice is a group of reducer which we can use to add, update and delete data it will be send to store in order to use it
    const postSlice = createSlice({
        name:'posts',
        initialState,
        reducers: {
            postFirst(state, action){
                state.push(action.payload)
            },
            updatePost(state, action){
                const { id, title, content } = action.payload
                const existingPost = state.find(post => post.id === id)
                
                if (existingPost) {
                    existingPost.name = title
                    existingPost.content = content
                }
            },
            deletePost(state, action){
                const { id, title, content } = action.payload
                const existingPost = state.find(post => post.id === id)

                if (existingPost) {
                   ///
                }
            }
            
        }
    })
    
    export const { postFirst, updatePost } = postSlice.actions
    export default postSlice.reducer

    //console.log(postSlice.reducer)