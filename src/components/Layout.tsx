import { useState, ReactNode } from 'react';
import { House, Speedometer2, Table, Grid, People } from 'react-bootstrap-icons';
import Header from '../components/Layout/Header';
import Sidebar from '../components/Layout/Sidebar';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false); // Estado para controlar a sidebar

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen); // Alterna a sidebar entre aberta e fechada
    };

    const navLinks = [
        { path: '/', label: 'Home', className: 'link-secondary' },
        { path: '#', label: 'Inventory', className: 'link-dark' },
        { path: '#', label: 'Customers', className: 'link-dark' },
        { path: '#', label: 'Products', className: 'link-dark' }
    ];

    const sidebarItems = [
        { path: '/', label: 'Home', icon: House },
        { path: '#', label: 'Dashboard', icon: Speedometer2 },
        { path: '#', label: 'Orders', icon: Table },
        { path: '#', label: 'Products', icon: Grid },
        { path: '#', label: 'Customers', icon: People }
    ];

    return (
        <>
            {/* Header no topo, fora do flex */}
            <Header toggleSidebar={toggleSidebar} navLinks={navLinks} />

            {/* Sidebar e conteúdo principal em flex */}
            <div className="d-flex" style={{ minHeight: '100vh' }}>
                <Sidebar isOpen={isSidebarOpen} items={sidebarItems} />

                <div className="flex-grow-1 p-3">
                    <div className="container">
                        {children} {/* Aqui é onde as páginas serão injetadas */}
                    </div>
                </div>

                <footer className="mt-auto">
                    <p>Footer</p>
                </footer>
            </div>
        </>
    );
};

export default Layout;
