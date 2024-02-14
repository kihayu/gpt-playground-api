import { cors } from 'hono/cors'
import { Hono } from 'hono'
import { initialiseRoutes } from './routes'
import { logger } from 'hono/logger'

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))
app.use('*', logger())

app.notFound((c) => c.text('404 Not Found'))
app.onError((err, c) => {
  console.error(err)
  return c.text('500 Internal Server Error', 500)
})

app.use(
  '/gpt/*',
  cors({
    origin: 'http://localhost:5173',
  }),
)

initialiseRoutes(app)

export default app
