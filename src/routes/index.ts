import gptController from './gpt/gpt.controller'
import { Hono } from 'hono'

export const initialiseRoutes = (app: Hono): void => {
  app.route('/gpt', gptController)
}
