const { newCrop, allCrop, cropById, updateCrop } = require('../controller/cropController');
const router = require('express').Router()

// Create crop endpoint
router.get('/all', allCrop);

// New crop endpoint
router.post('/new', newCrop);

// Crop by id endpoint
router.get('/:id', cropById);

// Update crop endpoint
router.patch('/update/:id', updateCrop);

module.exports = router;