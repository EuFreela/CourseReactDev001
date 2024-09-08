import React from 'react';
import { Link } from 'react-router-dom';
import { Bootstrap, List } from 'react-bootstrap-icons';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

// Definir a interface para os links de navegação
interface NavLink {
    path: string;
    label: string;
    className?: string; // Classe opcional para estilização
}

interface HeaderProps {
    toggleSidebar: () => void;
    navLinks: NavLink[]; // Lista de links de navegação passada como prop
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, navLinks }) => {
    return (
        <Navbar bg="light" expand="lg" className="mb-3 border-bottom">
            <Container>
                {/* Botão de Toggle para a Sidebar */}
                <button className="btn" onClick={toggleSidebar}>
                    <List size={24} />
                </button>

                <Navbar.Brand as={Link} to="/">
                    {/* Ícone do Bootstrap */}
                    <Bootstrap size={32} className="me-2" aria-label="Bootstrap" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* Mapear os links de navegação passados como prop */}
                        {navLinks && navLinks.map((navLink, index) => (
                            <Nav.Link
                                as={Link}
                                to={navLink.path}
                                key={index}
                                className={navLink.className || 'link-dark'}
                            >
                                {navLink.label}
                            </Nav.Link>
                        ))}
                    </Nav>

                    <Form className="d-flex me-3">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                    <NavDropdown
                        title={
                            <img
                                src="https://avatars.githubusercontent.com/u/32210677?v=4"
                                alt="Profile"
                                width="32"
                                height="32"
                                className="rounded-circle"
                            />
                        }
                        id="basic-nav-dropdown"
                        align="end"
                    >
                        <NavDropdown.Item as={Link} to="/new-project">New project...</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/signout">Sign out</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
