import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import { AiOutlineUser } from 'react-icons/ai';
import { BrowserRouter, Link } from 'react-router-dom';
import LOGO from '../../images/logo.png';

function Header() {
	const [scroll, setscroll] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 1) {
				setscroll(true);
			} else if (window.pageYOffset < 1) {
				setscroll(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<Navbar
				collapseOnSelect
				expand="lg"
				fixed="top"
				variant="dark"
				className={scroll ? 'scrolled-navbar' : 'navbar'}
			>
				<Container className="nav">
					<Navbar.Brand>
						<img src={LOGO} alt="logo" className="logo-image" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav>
							<Nav.Link>
								<p className="menu-item">
									<BrowserRouter>
										<Link to="/" className="link">
											Home
										</Link>
									</BrowserRouter>
								</p>
							</Nav.Link>
							<Nav.Link>
								<p className="menu-item">
									<BrowserRouter>
										<Link to="/actors" className="link">
											Actors
										</Link>
									</BrowserRouter>
								</p>
							</Nav.Link>
							<Nav.Link>
								<p className="menu-item">
									<BrowserRouter>
										<Link to="/movies" className="link">
											Movies
										</Link>
									</BrowserRouter>
								</p>
							</Nav.Link>
							<NavDropdown
								title={<span className="link">Genre</span>}
								id="collasible-nav-dropdown"
							>
								<NavDropdown.Item>
									<p className="">
										<BrowserRouter>
											<Link to="/" className="menu-item-dropdown">
												Action
											</Link>
										</BrowserRouter>{' '}
									</p>
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
					<Navbar.Collapse
						id="responsive-navbar-nav"
						className="justify-content-end "
					>
						<Nav>
							<Nav.Link style={{ display: 'none' }}>
								<NavDropdown
									title={
										<span className="menu-item user-account">
											<AiOutlineUser />
										</span>
									}
									id="collasible-nav-dropdown"
								>
									<NavDropdown.Item>
										<p className="menu-item-dropdown">BookMark </p>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<p className="menu-item-dropdown">My Profile </p>
									</NavDropdown.Item>
									<Dropdown.Divider />
									<NavDropdown.Item>
										<p className="menu-item-dropdown">LogOut </p>
									</NavDropdown.Item>
								</NavDropdown>
							</Nav.Link>
							<button type="submit" className="Login-btn">
								LOGIN
							</button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
