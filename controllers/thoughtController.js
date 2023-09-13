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
    // still need to do...update user to pass the idea into the users array of thoughts
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            reactionSchema.json(thought);
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

            await User.deleteMany({ _id: { $in: thought.users } });
            res.json({ message: 'Thought and users deleted successfully!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
