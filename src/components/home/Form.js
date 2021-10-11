import React from 'react'
import useInput from '../../customhook/useInput'
import { addNote } from '../../store/actions/noteAction'
import { useDispatch } from "react-redux";

const Form = () => {
    const [title, bindTitle, resetTitle] = useInput("");
    const [content, bindContent, resetContent] = useInput("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNote({ title, content }))
        resetTitle()
        resetContent()
    }
    return (
        <div className="section">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">New Note</h5>
                <div className="input-field ">
                    <input id="first_name" type="text" className="validate" {...bindTitle} />
                    <label htmlFor="note_title">Note Title</label>
                </div>
                <div className="input-field">
                    <textarea id="textarea1" className="materialize-textarea" {...bindContent}></textarea>
                    <label htmlFor="textarea1">Note Content</label>
                </div>
                <button className="btn green">Add</button>
            </form>
        </div>
    )
}

export default Form
