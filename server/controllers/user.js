const express = require('express');
const router = express.Router();

const {User} = require('../models/user');
const {auth} = require('../middleware/auth');

router.get('/', auth, (req, res) => {
	User.find({}, (err, doc) => {
		if (err) return res.status(400).send(err);
		res.status(200).send(doc);
	})
});

router.get('/auth', auth, (req, res) => {
	res.json({
		isAuth: true,
		user: {
			...req.user._doc
		}
	})
});

router.get('/logout', auth, (req, res) => {
	req.user.deleteToken(req.token, (err, user) =>{
		if (err) return res.status(400).send(err);
		res.clearCookie('auth').sendStatus(200);
	});

});

router.get('/getReviewer', (req, res) => {
	const id = req.query.id;

	User.findById(id, (err, doc) => {
		if (err) return res.status(400).send(err);
		res.json({
			name: doc.name,
			lastName: doc.lastName
		});
	})
});

router.patch('/', (req, res) => {
	User.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, doc) => {
		if (err) return res.status(400).send(err);
		res.json({
			success: true,
			doc
		});
	})
});


router.post('/register', (req, res) => {
	console.log(req.body);
	const user = new User(req.body);

	user.save((err, doc) => {
		if (err) return res.status(400).send(err);
		res.status(200).json({
			post: true,
			userId: doc._id
		});
	});
});

router.post('/login', (req, res) => {
	User.findOne({'email': req.body.email}, (err, user) => {
		if (!user)
			return res.json({
				isAuth: false,
				message: 'Auth Failed user not found'
			});

		user.comparePassword(req.body.password, (err, isMatch) => {
			if (err) return res.status(400).send(err);

			if (!isMatch) {
				return res.json({
					isAuth: false,
					message: 'Wrong password'
				})
			} else {
				user.generateToken((err, doc) => {
					if (err) return res.status(400).send(err);

					res.cookie('auth', doc.token).status(200).json({
						isAuth: true,
						message: doc._id,
						email: doc.email
					});
				})
			}
		})
	})
});

router.delete('/', (req, res) => {
	User.findByIdAndRemove(req.query.id, (err, doc) => {
		if (err) return res.status(400).send(err);
		res.json(true);
	})
});

module.exports = router;
