import axios from 'axios';

export function getBooks(skip = 0, limit = 10, order = 'asc', list = []) {
	const request = axios.get(`/api/book?skip=${skip}&limit=${limit}&order=${order}`)
		.then(response => {
			if (list.length > 0) {
				return [...list, ...response.data];
			} else {
				return response.data;
			}
		});

	return {
		type: 'GET_BOOKS',
		payload: request
	}
}

export function getBookWithReviewer(bookId) {
	const request = axios.get(`/api/book?id=${bookId}`);


	return (dispatch) => {
		request.then(({data}) => {
			const book = data;

			axios.get(`/api/user/getReviewer?id=${book.ownerId}`)
				.then(({data}) => {
					const response = {
						book,
						reviewer: data
					};

					console.log(response);

					dispatch({
						type: 'GET_BOOK_WITH_REVIEWER',
						payload: response
					})
				});


		});
	};

}

export function clearBook() {
	return {
		type: 'CLEAR_BOOK',
		payload: {
			book: {},
			reviewer: {}
		}
	}
}

export function addBook(book) {
	const request = axios.post(`/api/book`, book)
		.then(response => response.data);

	return {
		type: 'ADD_BOOK',
		payload: request
	}
}

/////////////////////////////////////////////////////////


export function getUserPosts(userId) {
	const request = axios.get(`/api/book/findByOwnerId?owner=${userId}`)
		.then(response => response.data);

	return {
		type: 'GET_USER_POSTS',
		payload: request
	}
}

export function loginUser({email, password}) {
	const request = axios.post(`/api/user/login`, {email, password})
		.then(response => response.data);

	return {
		type: 'LOGIN_USER',
		payload: request
	}
}

export function auth() {
	const request = axios.get(`/api/user/auth`)
		.then(response => response.data);

	return {
		type: 'AUTH_USER',
		payload: request
	}
}