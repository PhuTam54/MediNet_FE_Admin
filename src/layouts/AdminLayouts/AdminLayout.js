import HeaderAdmin from '../components/Admin/Header';
import SidebarAdmin from '../components/Admin/Sidebar';

function AdminLayout({ children }) {
    return (
        <div className="main-wrapper main-wrapper-1">
            <HeaderAdmin />
            <SidebarAdmin />
            <div className="main-content">{children}</div>
        </div>
    );
}

export default AdminLayout;
