import React from 'react'

import '../styles/home.css'

function Introduction() {
	return (
		<>
			<h1 className='introduction__title'>Lorem ipsum dolor sit amet consectetur.</h1>
			<form action=''>
				<input className='introduction__form__search-bar' type='text' name='' id='' placeholder='What do you need to be done?' />
				<input type='submit' value='search' />
			</form>
		</>
	)
}

function Featured() {
	return (
		<>
			<h2>Featured Projects</h2>
		</>
	)
}

function PopularServices() {
	return (
		<>
			<h2>Popular Services</h2>
		</>
	)
}

function Companions() {
	return (
		<>
			<h2>Meet Our Companions!</h2>
		</>
	)
}

function Home() {
	return (
		<>
			<Introduction />
			<Featured />
			<PopularServices />
			<Companions />
		</>
	)
}

export default Home