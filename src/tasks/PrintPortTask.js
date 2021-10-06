const {Task, log, global} = require('skalavel')

module.exports = class PrintPortTask extends Task {
  run() {
    log.info(`Server will be listen on port ${global.fetch('port')}`)
  }
}