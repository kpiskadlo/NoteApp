export const options = {
  schema: {
    response: {
      200: { $ref: 'notes.json' },
      '4xx': { $ref: 'errorResponse.json' },
      '5xx': { $ref: 'errorResponse.json' }
    }
  }
}
export const handler = async (request, reply) => {
  const notes = await request.noteService.findAll(request.body)
  reply.status(200).send(notes)
}
