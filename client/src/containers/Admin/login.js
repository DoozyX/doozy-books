import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, userRegister } from '../../actions'


class Login extends Component {
	state = {
		email: '',
		password: '',
		error: '',
		success: false
	};

	handleInputEmail = (event) => {
		this.setState({email: event.target.value})
	};
	handleInputPassword = (event) => {
		this.setState({password: event.target.value})
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.user.login.isAuth) {
			this.props.history.push('/user')
		}
	}

	submitForm = (event, isLogin) => {
		event.preventDefault();
		if (isLogin !== null) {
			if (isLogin) {
				this.props.dispatch(loginUser(this.state))
			} else {
				this.props.dispatch(userRegister({
					email: this.state.email,
					password: this.state.password
				}, []));
				this.props.history.push('/')
			}
		}
	};

	render() {
		let user = this.props.user;
		return (
			<div className="rl_container">
				<form onSubmit={(event) => this.submitForm(event, null)}>
					<h2>Log in here</h2>

					<div className="form_element">
						<input
							type="email"
							placeholder="Enter your mail"
							value={this.state.email}
							onChange={this.handleInputEmail}
						/>
					</div>

					<div className="form_element">
						<input
							type="password"
							placeholder="Enter your password"
							value={this.state.password}
							onChange={this.handleInputPassword}
						/>
					</div>

					<button onClick={(event) => this.submitForm(event, false)}>Register now</button>
					<br/>
					<button onClick={(event) => this.submitForm(event, true)}>Log in</button>

					<div className="error">
						{
							user.login ?
								<div>{user.login.message}</div>
								: null
						}
					</div>
				</form>
			</div>
		);
	}
}

function

mapStateToProps(state) {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)

(
	Login
)

