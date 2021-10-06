const {Server, log, global} = require('skalavel')
const router = require('./router')
const tasks = require('./tasks')

const server = new Server()

server.setRouter(router)
server.setTasks(tasks)

server.listen(global.fetch('port'), () => {
  log.success('Server is listening successfully!')
})