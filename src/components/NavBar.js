import { useNavigate, NavLink } from "react-router-dom";

function NavBar() {
	const navigate = useNavigate();

	return (
		<div className="navbar">
			<NavLink to="/"> cristina diaz </NavLink>

			<p></p>
			<p></p>
			<p></p>
			<p></p>
			<p></p>
			<p></p>
			<p></p>
			<NavLink to="/about"> about </NavLink>
			<NavLink to="/contact"> contact</NavLink>
		</div>
	);
}

export default NavBar;
