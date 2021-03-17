import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Quiz from "./Quiz";
import About from "./About";
import "./Navbar.css"

export default function App() {
	return (
		<Router>
				<header className='navbar'>
					<div className='navbar__title navbar__item'>	<Link to="/">Home</Link></div>
					<div className='navbar__item'>	<Link to="/about">About</Link></div>
					<div className='navbar__item'><Link to="/quiz">Quiz</Link></div>
	</header>

							<Switch>
									<Route path="/about">
											<About />
									</Route>
									<Route path="/quiz">
											<Quiz />
									</Route>
									<Route path="/">
											<Dashboard />
									</Route>
							</Switch>
			</Router>
	);
}
