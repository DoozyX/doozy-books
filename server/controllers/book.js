const express = require('express');
const router = express.Router();

const {Book} = require('../models/book');

router.get('/', (req, res) => {
	const id = req.query.id;

	if (id) {
		Book.findById(id, (err, doc) => {
			if (err) return res.status(400).send(err);
			res.send(doc);
		})
	} else {
		const skip = parseInt(req.query.skip);
		const limit = parseInt(req.query.limit);
		const order = req.query.order;

		Book.find().skip(skip).sort({_id: order}).limit(limit).exec((err, doc) => {
			if (err) return res.status(400).send(err);
			res.send(doc);
		})
	}
});

router.get('/findByOwnerId', (req, res) => {
	const id = req.query.owner;

	Book.find({ownerId: id}).exec((err, doc) => {
		if (err) return res.status(400).send(err);

		res.send(doc);
	})

});

router.patch('/', (req, res) => {
	Book.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, doc) => {
		if (err) return res.status(400).send(err);
		res.json({
			success: true,
			doc
		});
	})
});


router.post('/', (req, res) => {
	const book = new Book(req.body);

	book.save((err, doc) => {
		if (err) return res.status(400).send(err);
		res.status(200).json({
			post: true,
			bookId: doc._id
		});
	});
});

router.delete('/', (req, res) => {
	Book.findByIdAndRemove(req.query.id, (err, doc) => {
		if (err) return res.status(400).send(err);
		res.json(true);
	})
});

module.exports = router;
