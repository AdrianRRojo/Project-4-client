import { Link } from 'react-router-dom'


export default function Navbar({ currentUser, handleLogout }) {
	let username = ''

	if(currentUser){
		username = currentUser.username
	}
	const loggedIn = () => {
		
		<nav className='navbar navbar-expand-md navbar-dark'>
			<div className='container navBarCont'>
				<button className='navbar-toggler ms-auto' type= 'button' data-bs-toggle='collapse' data-bs-target='#navmenu'>
					<span className='navbar-toggler-icon'></span>
				</button>

					<div className='collapse navbar-collapse ms-auto' id='navmenu'>
						<ul className='navbar-nav ms-auto'>
							<li className='nav-item'>
								{/* if the user is logged in... */}
								<Link to="/" className='nav-link'>
									<span onClick={handleLogout}>Logout</span>
								</Link>
							</li>

							<li>
								<Link to={`/${username}`} className='nav-link'>
									Profile
								</Link>
							</li>
						</ul>
					</div>
			</div>

		</nav>
		
		
		
	}
		
		
		const loggedOut = (
			console.log('please sign in')
	 )
	 
	 return (
		 <div>
				{/* user always sees this section */}
				
				{loggedIn()}
				
		</div>
	)
}