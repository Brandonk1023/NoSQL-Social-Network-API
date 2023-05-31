const router = require('express').Router()

const {

} = require('../../controller/thoughtsController')

router.route('/').get(getThoughts).post(createThought)

module.exports = router
