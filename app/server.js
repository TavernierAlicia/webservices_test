const express = require('express')
const routes = require('./controllers/routes.js')

/** 
 * Server
 * @Class
*/
class Server {
  constructor () {
    this.app = express()
  }

  /**
   * Routes
   */
  routes () {
    new routes.users.Create(this.app)
    new routes.users.Show(this.app)

    this.app.use((req, res) => {
      res.status(404).json({
        'code': 404,
        'message': 'Not found'
      })
    })
  }

  /**
  * run
  */
  run () {
    this.routes()
    this.app.listen(3000)
  }
}

module.exports = Server
