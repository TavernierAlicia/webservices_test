
const users = require('../../models')
/**
 * Delete
 * @class
 */
class Delete {
  constructor (app) {
    this.app = app
    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.delete('/user/delete/:id', (req, res) => {
      try {
        const {id} = req.params
        res.status(200).json(users.map(user => user.id === id ? false : user))
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

module.exports = Delete
