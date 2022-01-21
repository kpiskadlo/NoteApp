export const options = {
  schema: {
    param: {
      $ref: 'idParam.json'
    },
    body: {
      $ref: 'updateNoteBody.json'
    },
    response: {
      200: { $ref: 'note.json' },
      '4xx': { $ref: 'errorResponse.json' },
      '5xx': { $ref: 'errorResponse.json' }
    }
  }
}
export const handler = async (request, reply) => {
  const id = request.params.id
  const updatedNote = await request.noteService.update(id, request.body)
  reply.status(200).send(updatedNote)
}
