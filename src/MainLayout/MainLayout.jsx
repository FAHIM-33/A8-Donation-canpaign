import { Outlet } from "react-router-dom";
import Nav from "../Components/Navbar/Nav";

const MainLayout = () => {
    return (
        <div className="max-w-[1600px] mx-auto px-2 lg:px-8">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;