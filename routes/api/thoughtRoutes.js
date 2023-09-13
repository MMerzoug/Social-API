const router = require('express').Router();
const {
    getThought,
    getAllThoughts,
    createThought,
    updateThought,
    addThought,
    deleteThought,
} = require('../../controllers/thoughtController');

//  /api/thoughts
router.route('/').get(getThought).post(createThought);

// /api/users/:thoughtId
router.route('/:thoughtId').post(updateThought);

//  /api/thoughts/:thoughtId
router
.route('/:thoughtId')
.put(updateThought)
.delete(deleteThought);


// /api/users/:thoughtId/thoughts/:thoughtId
router.route('/:UserId/thoughts/:thoughtId').post(addThought).delete(deleteThought);

module.exports = router;