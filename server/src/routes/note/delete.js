export const options = {
  schema: {
    param: {
      $ref: 'idParam.json'
    },
    response: {
      '4xx': { $ref: 'errorResponse.json' },
      '5xx': { $ref: 'errorResponse.json' }
    }
  }
}
export const handler = async (request, reply) => {
  const id = request.params.id
  await request.noteService.delete({ _id: id })
  reply.status(204).send()
}
