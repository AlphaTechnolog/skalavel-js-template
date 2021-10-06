const {global, env} = require('skalavel')

global.set('port', Number(env.getParsedValue('PORT') || '8000'))