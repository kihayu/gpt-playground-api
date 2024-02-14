import { ChatCompletionMessageParam } from 'openai/resources/index.mjs'
import { ChatCompletionCreateParamsBase } from 'openai/resources/chat/completions.mjs'

export interface GptRequestParameters {
  messages: Array<ChatCompletionMessageParam>
  model: ChatCompletionCreateParamsBase['model']
  maxTokens: ChatCompletionCreateParamsBase['max_tokens']
  temperature: ChatCompletionCreateParamsBase['temperature']
}
