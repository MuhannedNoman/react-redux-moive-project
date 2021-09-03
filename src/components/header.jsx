import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import { AiOutlineUser } from 'react-icons/ai';

function Header() {
	return (
		<>
			<Navbar
				collapseOnSelect
				expand="lg"
				fixed="top"
				variant="dark"
				className="navbar"
			>
				<Container className="nav">
					<Navbar.Brand>
						<p className="title">MovieStan</p>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse
						id="responsive-navbar-nav"
						className="justify-content-end "
					>
						<Nav>
							<Nav.Link>
								<p className="menu-item">Home</p>
							</Nav.Link>
							<Nav.Link>
								<p className="menu-item">Actors</p>
							</Nav.Link>
							<NavDropdown
								title={<span className="menu-item">Genre</span>}
								id="collasible-nav-dropdown"
							>
								<NavDropdown.Item>
									<p className="menu-item-dropdown">Action </p>
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
					<Navbar.Collapse
						id="responsive-navbar-nav"
						className="justify-content-end "
					>
						<Nav>
							<Nav.Link>
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
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
