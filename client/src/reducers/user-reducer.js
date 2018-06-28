export default function (state = {}, action) {
	switch (action.type) {
		case 'LOGIN_USER':
			return {...state, login: action.payload};
		case 'AUTH_USER':
			return {...state, login: action.payload};
		case 'GET_USER_POSTS':
			return {...state, posts: action.payload};
		default:
			return state;
	}

}