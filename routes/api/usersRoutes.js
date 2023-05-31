const router = require('express').Router()

const {

} = require('../../controllers/usersController')

router.route('/').get(getUsers).post(createUser)

module.exports = router