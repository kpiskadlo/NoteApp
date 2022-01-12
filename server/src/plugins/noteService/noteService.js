import Note from '../../models/note'

export class NoteService {
  create (createNoteDto) {
    const newNote = new Note(createNoteDto)
    return newNote.save()
  }
}
