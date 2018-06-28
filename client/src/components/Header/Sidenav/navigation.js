import React from 'react';
import SideNav from 'react-simple-sidenav'
import NavigationItems from "./navigation-items";

function Navigation(props) {
	return (
		<SideNav
			showNav={props.showNav}
			onHideNav={props.onToggleNav}
			navStyle={{
				background: '#242424',
				maxWidth: '220px'
			}}
		>
			<NavigationItems/>
		</SideNav>
	);
}

export default Navigation;
