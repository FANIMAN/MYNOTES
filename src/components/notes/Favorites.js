import React from 'react'
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import NotesList from '../notes/NotesList'

const Favorites = () => {
    useFirestoreConnect([{ collection: 'notes', where: ['favorite', '==', true], orderBy: ['createdAt', 'desc'], storeAs: 'favnotes' }])
    const favnotes = useSelector((state) => state.firestore.data['favnotes']);
    console.log(favnotes)
    // const notesListMarkup = favnotes ? <NotesList notes={favnotes} /> : null
    // const favarray = favnotes ? Object.key(favnotes) : []
    const fav_array = []
    for (let key in favnotes) {
        fav_array.push({ id: key, ...favnotes[key] })
    }

    return <NotesList notes={fav_array} />
}

export default Favorites
