import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="flex justify-between py-9 items-center">
            <div><img src="/Logo.png" alt="" /></div>
            <div className="flex gap-12 w-fit text-regular text-lg">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/donation">Donation</NavLink>
                <NavLink to="/stats">Statistics</NavLink>
            </div>
        </div>
    );
};

export default Nav;