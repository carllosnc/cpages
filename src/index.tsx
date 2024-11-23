import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <h1>
      Learning deploy with honojs
    </h1>
  )
})

export default app