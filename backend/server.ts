import http from 'http'
import api from './api/api'
import './api/database'

const server = http.createServer(api)

server.on('listening', () => {
  console.log('Servidor en linea en el puerto 8080')
})

server.on('error', (error) => {
  console.error('Error en el server')

  console.error(error)
})

server.listen(8080)
