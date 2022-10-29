import {useState, Redirect} from 'react'
export default function Navbar() {
	const [search, setSearch] = useState("");
	const navbar = () => {
		
		return (

			<nav class="navbar navbar-expand-lg bg-dark">
  				<div class="container-fluid">
    			<a class="navbar-brand whiteFont" href="/">Home</a>
    				<div class="collapse navbar-collapse" id="navbarSupportedContent">
      				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					  <li class="nav-item">
          				<a class="nav-link whiteFont" href="/news" target="_blank">News</a>
        				</li>
        				<li class="nav-item">
          				<a class="nav-link whiteFont" href="https://colab.research.google.com/drive/1RLAamXA3JF8el2xJh2nOOeI1fW_his6i?usp=sharing" target="_blank">Predictor</a>
        				</li>
					
      				</ul>	
      				
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