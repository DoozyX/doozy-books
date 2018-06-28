import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom'
import Navigation from "./Sidenav/navigation";


class Header extends Component {
	state = {
		showNav: false,
	};

	toggleNav = () => {
		this.setState({
			showNav: !this.state.showNav,
		});
	};

	render() {
		return (
			<header>
				<div className={'open_nav'}>
					<FontAwesome
						name={'bars'}
						style={{
							color: '#ffffff',
							padding: '10px',
							cursor: 'pointer'
						}}
						onClick={this.toggleNav}
					/>
				</div>

				<Navigation
					showNav={this.state.showNav}
					onToggleNav={this.toggleNav}
				/>

				<Link
					to={'/'}
					className={'logo'}
				>
					Doozy Books Review
				</Link>

			</header>
		);
	}
}

export default Header;
