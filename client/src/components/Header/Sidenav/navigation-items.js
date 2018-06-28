import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const NavigationItems = (props) => {
	const items = [
		{
			type: 'navItem',
			icon: 'home',
			text: 'Home',
			link: '/',
			restricted: null

		},
		{
			type: 'navItem',
			icon: 'file-text-o',
			text: 'My Profile',
			link: '/user',
			restricted: true

		},
		{
			type: 'navItem',
			icon: 'file-text-o',
			text: 'Add Admins',
			link: '/user/register',
			restricted: true

		},
		{
			type: 'navItem',
			icon: 'sign-in',
			text: 'Login',
			link: '/login',
			restricted: false

		},
		{
			type: 'navItem',
			icon: 'file-text-o',
			text: 'My Reviews',
			link: '/user/posts',
			restricted: true
		},
		{
			type: 'navItem',
			icon: 'file-text-o',
			text: 'Add reviews',
			link: '/book/add',
			restricted: true

		},
		{
			type: 'navItem',
			icon: 'sign-out',
			text: 'Logout',
			link: '/user/logout',
			restricted: true

		},
	];

	const element = (item, i) => (
		<div
			key={i}
			className={item.type}
		>
			<Link
				to={item.link}
			>
				<FontAwesome name={item.icon}/>
				{item.text}
			</Link>
		</div>
	);

	return (
		<div>
			{
				items.map((item, i) => {
					return element(item, i)
				})
			}
		</div>
	);
};

export default NavigationItems;
