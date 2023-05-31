const { Schema, Types } = require('mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validateEmail, 'Please enter a valid email address.']
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address.']
    },
    thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'thought'
        }
    ],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
}
{
    toJSON: {
        getters: true,
        virtuals: true
    },
    id: false
})

userSchema.virtual('friendCount').get(function() {
    return this.friends.length
})

module.exports = userSchema