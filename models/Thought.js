const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./Reaction');

const thoughtSchema = new mongoose.Schema(
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

thoughtSchema.virtuals('reactionCount').get(function(){
    return this.reactions.length
});

const Thought = model ('Thought', thoughtSchema);

module.exports = Thought;