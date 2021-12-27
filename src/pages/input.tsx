    import { nanoid } from "@reduxjs/toolkit";
    import React, { useState } from "react";
    import { useDispatch } from 'react-redux';
    import { postFirst } from "../store/reducers.tsx/postSlice";

    const FirstReduxTest = () => {

        const [name, setName] = useState('');
        const [content, setTitle] = useState('');
        const [id, setId] = useState ('');

        const  dispatch = useDispatch();

        const onIDChange = (e: any) =>{
            setId(e.target.value)
        }

        const onNameChange = (e: any) =>{
            setName(e.target.value)
        }

        const onContentChange = (e: any) =>{
            setTitle(e.target.value)
        }

        const onClickSend = () => {
            dispatch(postFirst({
                id: nanoid(),
                name,
                content
            }))

            setName('')
            setTitle('')
            setId('')
        }

        return(
            <section>
        <form>
            <label>ID</label>

            <label>Name</label>
            <input
            type="text"
            id="postName"
            name="postName"
            onChange={onNameChange}
            />

            <label>Content</label>
            <input
            type="text"
            id="postContent"
            name="postContent"
            onChange={onContentChange}
            />
            
            <button
            id="sendBtn"
            name="sendBtn"
            onClick={onClickSend}
            >Send</button>
        </form>
        </section>
        )
    }

    export default FirstReduxTest;


