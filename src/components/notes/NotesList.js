import React from 'react'
import Note from './Note'
const NotesList = ({ notes }) => {
    return (
        <div className="noteslist">
            {notes && notes.map(note =>

                <Note note={note} />

            )}

        </div>
    )
}

export default NotesList
