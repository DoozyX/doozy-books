const config = {
	production: {
		SECRET: process.env.SECRET,
		DATABASE: 'mongodb+srv://doozy:doozy@cluster0-mcisa.mongodb.net/test?retryWrites=true',
		PORT: process.env.PORT
	},
	default: {
		SECRET: 'SUPERSECRETPASSWORD123',
		//DATABASE: 'mongodb://localhost:27017/doozyBooks'
		DATABASE: 'mongodb+srv://doozy:doozy@cluster0-mcisa.mongodb.net/test?retryWrites=true',
		PORT: 3001	
}
};

exports.get = function get(env) {
	return config[env] || config.default;
};