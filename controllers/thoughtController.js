// get all thoughts
// get 1 thought
// create thought and update user to pass the idea into the users array of thoughts
// update thought
// delete thought
// add a thought
// delete a thought

const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
    // get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            reactionSchema.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // get 1 thought
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
                .select('__v');

            if (!thought) {
                return res.status(404).json({ message: 'No thoughts here...' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // create a thought
    // still need to do...update user to pass the id into the users array of thoughts
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);

            const userData = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: thought._id} },
                { new: true }
                );

            res.json(userData);

        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // update a thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thoughts here...' });
            }
            res.json(course);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // delete a thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No thoughts here...' });
            }

            await User.findOneAndUpdate(
                { thoughts: req.params.thoughtId},
                {$pull: {thoughts: req.params.thoughtId}},
                {new: true}
                );


            res.json({ message: 'Thought deleted successfully!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // addReaction
    // Look at add friend
async addReaction(req, res) {
    try {
        const reaction = await Thought.findOneAndUpdate (
            { _id: req.params.thoughtId},
            {$push: {reactions: req.body}},
            {new: true}

            )
            res.json(reaction)
    } catch (err) {
        res.status(500).json(err);
    }
},

// removeReaction
// Look at delete a friend
async removeReaction (req, res) {
    try {
        const reaction = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId},
            {$pull: {reactions: {reactionId: req.params.reactionId}}},
            {new: true}
        )
        res.json ({message: 'Reaction has been removed.'})
    } catch (err) {
        res.status(500).json(err);
    }

},

};
