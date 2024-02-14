import OpenAI from 'openai'
import { GptRequestParameters } from './gpt.types'

export class GptService {
  async postGptRequest(params: GptRequestParameters) {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    const completion = await openai.chat.completions.create({
      messages: params.messages,
      model: params.model,
      max_tokens: params.maxTokens,
      temperature: params.temperature,
    })

    return completion.choices[0].message
  }
}
