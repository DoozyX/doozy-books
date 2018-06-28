import React, { Component } from 'react';
import { connect } from 'react-redux'

import { loginUser } from "../../actions";

class Login extends Component {

	state = {
		email: '',
		password: '',
		error: '',
		success: false
	};

	submitForm = (event) => {
		event.preventDefault();
		this.props.dispatch(loginUser(this.state))
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.user.login.isAuth) {
			this.props.history.push('/user');
		}
	}


	render() {
		console.log(this.props);
		return (
			<div className={'rl_container'}>
				<form onSubmit={this.submitForm}>
					<h2>Log in here</h2>

					<div className={'form_element'}>
						<input
							type={'email'}
							placeholder={'Enter your mail'}
							value={this.state.email}
							onChange={(event) => {
								this.setState({
									email: event.target.value
								});

							}}
						/>
					</div>

					<div className={'form_element'}>
						<input
							type={'password'}
							placeholder={'Enter your password'}
							value={this.state.password}
							onChange={(event) => {
								this.setState({
									password: event.target.value
								});

							}}
						/>
					</div>

					<button type={'submit'}>
						Log in
					</button>

					<div className={'error'}>
						{this.props.user.login ?
							<div>
								{this.props.user.login.message}
							</div>
							:
							null}
					</div>
				</form>

			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Login);
