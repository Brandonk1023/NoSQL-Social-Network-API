const thoughts = require('./../models/thoughts')
const users = require('./../models/users')

const thoughtsController = {
    getThoughts(req, res) {
        thoughts.find({})
        .then(dbThoughtsData => res.json(dbThoughtsData))
        .catch(err => {
            console.log(err)
            res.sendStatus(400)
        })
    },

    getSingleThought({ params}, res) {
        thoughts.findOne({_id: params.id })
        .then(dbThoughtsData => {
          if(!dbThoughtsData) {
            res.sendStatus(404)
            return
          }
          res.json(dbThoughtsData)
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(400)
        })
    },

    createThought({ params, body}, res) {
        thoughts.create(body)
        .then(({ _id }) => {
            return users.findOneAndUpdate(
                { _id: body.userId},
                { $push: { thoughts: _id}},
                { new: true }
            )
        })
    .then(dbUserData => {
        if(!dbUserData) {
            res.sendStatus(404)
            return
        }
        res.json(dbUserData)
    })
    .catch(err => res.json(err))
    },

    deleteThought({params}, res) {
        thoughts.findOneAndDelete({ _id: params.id })
        .then(dbThoughtsData => {
            if (!dbThoughtsData) {
                res.sendStatus(404)
                return
            }
            res.json(dbUserData)
        })
        .catch(err => res.json(err))
    },
    
    updateThought({ params, body}, res) {
        thoughts.findOneandUpdate({ _id: params.id}, body, { new: true, runValidators: true})
        .then(dbThoughtsData => {
            if (!dbThoughtsData) {
                res.sendStatus(404)
                return
            }
            res.json(dbThoughtsData)
        })
        .catch(err => res.json(err))
    }
}

module.exports = thoughtsController