import { Hono } from 'hono'
import { GptService } from './gpt.service'
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs'
import { GptRequestParameters } from './gpt.types'

const gptController = new Hono()
const gptService = new GptService()

gptController.post('/', async (c) => {
  const requestBody = await c.req.json()
  const requestMessages = requestBody.messages as Array<ChatCompletionMessageParam>

  const requestModel = requestBody.model as string
  const parameters = {
    messages: requestMessages,
    model: requestModel,
  } as GptRequestParameters
  const response = await gptService.postGptRequest(parameters)

  return c.json(response)
})

export default gptController
