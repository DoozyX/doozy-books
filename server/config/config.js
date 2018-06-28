const config = {
	production: {
		SECRET: process.env.SECRET,
		DATABASE: process.env.MONGODB_URI,
		PORT: process.env.PORT
	},
	default: {
		SECRET: '43?*h74b_!2<;mU~;De+jc%c2xmc`#${',
		DATABASE: 'mongodb://localhost/doozyBooks',
		PORT: 3001
	}
};

exports.get = function get(env) {
	return config[env] || config.default;
};