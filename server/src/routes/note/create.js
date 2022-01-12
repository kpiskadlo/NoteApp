export const options = {
  schema: {
    body: {
      $ref: 'createNoteBody.json'
    },
    response: {
      '4xx': { $ref: 'errorResponse.json' },
      '5xx': { $ref: 'errorResponse.json' }
    }
  }
}
export const handler = async (request, reply) => {
  await request.noteService.create(request.body)
  reply.status(201).send()
}
