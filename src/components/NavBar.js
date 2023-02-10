import { useNavigate, NavLink } from "react-router-dom";

function NavBar() {

	return (
		<div className="navbar">
			<div className="navbar-name"><NavLink to="/"> cristina diaz </NavLink> </div>
			<div className="navbar-about"><NavLink to="/about"> about </NavLink> </div>
			<div className="navbar-contact"><NavLink to="/contact"> contact </NavLink> </div>

		</div>
	);
}

export default NavBar;
