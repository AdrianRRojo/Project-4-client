export default function Navbar({ currentUser, handleLogout }) {
	let username = ''

	if(currentUser){
		username = currentUser.username
	}
	const navbar = () => {
		return (

			<nav class="navbar navbar-expand-lg bg-dark">
  				<div class="container-fluid">
    			<a class="navbar-brand whiteFont" href="/">Home</a>
    				<div class="collapse navbar-collapse" id="navbarSupportedContent">
      				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
        				<li class="nav-item">
          				<a class="nav-link whiteFont" href="https://colab.research.google.com/drive/1RLAamXA3JF8el2xJh2nOOeI1fW_his6i?usp=sharing" target="_blank">Predictor</a>
        				</li>
      				</ul>	
      				<form class="d-flex" role="search">
        				<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        				<button class="btn btn-outline-light" type="submit">Search</button>
      				</form>
    				</div>
  				</div>
			</nav>
		)
	}

	 return (
		 <div>
				{/* user always sees this section */}	
				{navbar()}		
		</div>
	)
}