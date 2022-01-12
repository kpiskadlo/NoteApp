import mongoose from 'mongoose'
const { Schema } = mongoose

const noteSchema = new Schema({
  name: String,
  status: String,
  tags: [String],
  content: String,
  categoryId: [String]
})

export default mongoose.model('Note', noteSchema)
