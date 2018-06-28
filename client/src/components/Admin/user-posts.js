import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment-js'
import { getUserPosts } from "../../actions";

class UserPosts extends Component {

	componentDidMount() {
		this.props.dispatch(getUserPosts(this.props.user.login.user._id));
	}

	render() {
		const user = this.props.user;

		return (
			<div className={'user_posts'}>
				<h4>Your reviews:</h4>

				<table>
					<thead>
					<tr>
						<th>Name</th>
						<th>Author</th>
						<th>Date</th>
					</tr>
					</thead>
					<tbody>
					{
						user.posts ?
							user.posts.map(item => (
								<tr key={item._id}>
									<td>{item.name}</td>
									<td>{item.author}</td>
									<td>{moment(item.date).format("MM/DD/YYYY")}</td>
								</tr>
							))
							:
							null
					}
					</tbody>
				</table>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(UserPosts);
