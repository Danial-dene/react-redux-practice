import React, { useState } from "react";
import  { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { updatePost } from "../store/reducers.tsx/postSlice";
import { useHistory, useLocation } from 'react-router-dom'

export const EditData = ({ passedObject }) => {
    console.log(passedObject)
    const { getData } = passedObject.params || ''//params can be consider as GET/POST in PHP it will return an object
    const dataId = useSelector((state: RootStateOrAny) => state.post === getData)//get the post in redux that have been pass from passedObject

    const [name, setName] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()
    //const history = useHistory()
   
    const onNameChange = e => setName(e.target.value)
    const onContentChange = e => setContent(e.target.value)

    const onSave = () => {
        dispatch(updatePost({ id: dataId, name, content}))
    //history.push(`/posts/${getData}`)

        setName('')
        setContent('')
    }

    return(
        <div>
            <h2>Edit Post</h2>
            <form>
                <input
                    type = 'text'
                    placeholder = 'Enter name'
                    id = 'name'
                    name = 'name'
                    onChange={onNameChange}
                />

                <input
                    type = 'text'
                    placeholder = 'Enter content'
                    id = 'content'
                    name = 'content'
                    onChange={onContentChange}
                />

                <button type="button" onClick={onSave}>Save</button>
            </form>
        </div>
    )
}