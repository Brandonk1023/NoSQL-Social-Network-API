const { schema, Types} = require('mongoose')

const reactionSchema = new Schema({
    reactionId:{
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 300,
    },
    username: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now()
    }
},
{
    toJson: {
        virtuals: true
    },
    _id: false
}
)

module.exports = reactionSchema