const {Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (dt) => dateFormat(dt)
        },
        username: {
            type: String,
            required: true
        },
        // once I create the reactionSchema I can require it at the top and then add it to the array
        reactions: [
            reactionSchema
        ]
    },
    {
        toJSON: {
            getters: true,
            vituals:true,
        },
    }
);

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
});

// Need to add mongoose .model because we are not decosntruction our import
const Thought = model ('Thought', thoughtSchema);

module.exports = Thought;