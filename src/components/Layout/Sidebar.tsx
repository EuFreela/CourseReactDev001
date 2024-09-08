import React, { useState } from 'react';
import { IconType } from 'react-icons'; // Usaremos isso para os ícones
import { Nav, Dropdown, Container } from 'react-bootstrap'; // Importando componentes do React-Bootstrap

interface SidebarItem {
    path: string;
    label: string;
    icon: IconType;
}

interface SidebarProps {
    isOpen: boolean;
    items: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, items }) => {
    const [activePath, setActivePath] = useState('/'); // Estado para controlar o link ativo

    const handleNavClick = (path: string) => {
        setActivePath(path); // Atualiza o caminho ativo quando o link é clicado
    };

    return (
        <Container fluid className="d-flex flex-column p-3 bg-light" style={{ width: isOpen ? '280px' : '80px' }}>
            <Nav defaultActiveKey="/" className="flex-column mb-auto">
                {items && items.map((item, index) => (
                    <Nav.Item className="mb-1" key={index}>
                        <Nav.Link
                            href={item.path}
                            className={`d-flex align-items-center ${activePath === item.path ? 'link-secondary' : 'link-dark'}`}
                            onClick={() => handleNavClick(item.path)} // Define o link como ativo
                        >
                            <item.icon className="bi pe-none me-2" size={16} />
                            {isOpen && item.label}
                        </Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>

            <hr />

            <Dropdown>
                <Dropdown.Toggle as="a" className="d-flex align-items-center link-dark text-decoration-none">
                    <img
                        src="https://avatars.githubusercontent.com/u/32210677?v=4"
                        alt="Profile"
                        width="32"
                        height="32"
                        className="rounded-circle me-2"
                    />
                    {isOpen && <strong>Lameck</strong>}
                </Dropdown.Toggle>

                <Dropdown.Menu className="shadow">
                    <Dropdown.Item href="#">New project...</Dropdown.Item>
                    <Dropdown.Item href="#">Settings</Dropdown.Item>
                    <Dropdown.Item href="#">Profile</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Sign out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    );
};

export default Sidebar;
