const { Schema, Types } = require('mongoose')
const reactionSchema = require('./reactions')

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type:String,
        required: true
    },
    reactions: [reactionSchema]
},
{
    toJson: {
        getters: true,
        virtuals: true,
    },
    id: false
}
)

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
})

const thought = model('thought', thoughtSchema)

module.exports = thought