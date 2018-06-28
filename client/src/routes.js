import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Auth from './hoc/auth';
import Layout from "./hoc/layout";
import Home from "./components/Home/home";
import Book from "./components/Book";
import Login from "./containers/Admin/login";
import Profile from "./components/Admin";
import AddReview from "./containers/Admin/add-review";
import UserPosts from "./components/Admin/user-posts";


const Routes = (props) => {
	return (
		<Layout>
			<Switch>
				<Route path={'/'} exact component={Auth(Home, null)}/>
				<Route path={'/login'} exact component={Auth(Login, false)}/>
				<Route path={'/user'} exact component={Auth(Profile, true)}/>
				<Route path={'/user/posts'} exact component={Auth(UserPosts, true)}/>
				<Route path={'/book/add'} exact component={Auth(AddReview, true)}/>
				<Route path={'/books/:id'} exact component={Auth(Book, null)}/>
			</Switch>
		</Layout>
	);
};

export default Routes;
