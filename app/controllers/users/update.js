
const users = require('../../models')
/**
 * Update
 * @class
 */
class Update {
  constructor (app) {
    this.app = app
    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.put('/user/update/:id', (req, res) => {
      try {
        const {id} = req.params
        res.status(200).json(users.find(user => user.id === id) || {})
      } catch (err) {
        res.status(500).json({
          'code': 500,
          'message': err
        })
      }
    })
  }

  /**
   * run
   */
  run () {
    this.middleware()
  }
}

module.exports = Update
