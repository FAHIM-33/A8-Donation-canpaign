import { Outlet } from "react-router-dom";
import Nav from "../Components/Navbar/Nav";

const MainLayout = () => {
    return (
        <div className="max-w-[1600px] mx-auto px-1 md:px-2 mb-10 md:mb-48">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;