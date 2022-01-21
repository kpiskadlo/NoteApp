import Note from '../../models/note'

export class NoteService {
  async create (createNoteDto) {
    const newNote = new Note(createNoteDto)
    return await newNote.save()
  }

  async findAll () {
    return await Note.find()
  }
}
