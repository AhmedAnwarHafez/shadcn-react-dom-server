import express from 'express'
import * as Path from 'node:path'
import * as URL from 'node:url'
import { Button } from './components/Button.tsx'
import { renderToStaticMarkup } from 'react-dom/server'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.json())
server.use(express.static(Path.join(__dirname, '../public')))

server.get('/', (req, res) => {
  res.send(
    renderToStaticMarkup(
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="stylesheet" href="/main.css" />
          <link rel="icon" type="image" href="/favicon.png" />

          <title>Tasks</title>
        </head>
        <body className="font-sans  bg-primary text-primary-foreground h-full">
          <div className="">
            <p>another tex</p>
            another text
            <Button variant={'destructive'}>I am cool THIS text.</Button>
            <Button variant={'secondary'}>I am cool THIS text.</Button>
            <Button variant={'ghost'}>I am cool THIS text.</Button>
            <Button variant={'link'}>I am cool THIS text.</Button>
            <Button>I am cool THIS text.</Button>
          </div>
        </body>
      </html>
    )
  )
})

export default server
