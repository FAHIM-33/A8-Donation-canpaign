import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <nav>This is Navbar</nav>
        <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;