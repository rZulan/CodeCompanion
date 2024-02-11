import React from 'react'
import '../styles/header.css'

const Header = () => {
	return (
		<>
		<h1 className='header__title'>My Header</h1>
		<ul>
			<li>Home</li>
			<li>About Us</li>
			<li>Contact Us</li>
			<li>Login</li>
		</ul>
	</>
	)
}

export default Header