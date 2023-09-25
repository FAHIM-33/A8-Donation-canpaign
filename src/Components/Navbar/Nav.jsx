import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="flex justify-between py-3 md:py-6 lg:py-9 items-center px-1 md:px-8">
            <div className="w-1/3 md:w-auto"><img src="/Logo.png" alt="" /></div>
            <div className="flex gap-4 md:gap-12 w-fit text-regular text-sm md:text-lg">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/donation">Donation</NavLink>
                <NavLink to="/stats">Statistics</NavLink>
            </div>
        </div>
    );
};

export default Nav;