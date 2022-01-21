export const options = {
  schema: {
    body: {
      $ref: 'createNoteBody.json'
    },
    response: {
      200: { $ref: 'note.json' },
      '4xx': { $ref: 'errorResponse.json' },
      '5xx': { $ref: 'errorResponse.json' }
    }
  }
}
export const handler = async (request, reply) => {
  const createdNote = await request.noteService.create(request.body)
  reply.status(200).send(createdNote)
}
