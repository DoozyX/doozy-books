const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
	review: {
		type: String,
		default: 'n/a'
	},
	rating: {
		type: Number,
		required: true,
		min: 1,
		max: 5
	},
	ownerId: {
		type: String,
		required: true
	}
}, {timestamps: true});

const Review = mongoose.model('Review', reviewSchema);

module.exports = {Review};