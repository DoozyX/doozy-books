import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBooks } from "../actions";
import BookItem from "../components/widgets/book-item";

class HomeContainer extends Component {
	componentDidMount() {
		this.props.dispatch(getBooks(0, 2));
	}

	loadMore = () => {
		this.props.dispatch(getBooks(this.props.books.list.length, 2, 'asc', this.props.books.list))
	};


	render() {
		console.log(this.props);
		return (
			<div>
				{
					this.props.books.list ?
						this.props.books.list.map(item => (
							<BookItem
								key={item._id}
								{...item}
							/>
						))
						:
						null
				}

				<div
					className={'loadmore'}
					onClick={this.loadMore}
				>
					Load More
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		books: state.books
	}
}

export default connect(mapStateToProps)(HomeContainer);
