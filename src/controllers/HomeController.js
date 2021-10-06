const {Controller} = require('skalavel')

module.exports = class HomeController extends Controller {
  home() {
    this.htmlRes('<h1>Hello, World!</h1>')
  }
}