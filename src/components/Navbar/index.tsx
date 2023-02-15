import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png"

const NavBar = () => {
  return (
    <div className="flex justify-between p-5 top-0 sticky z-10 bg-white shadow-lg">
      {/* Logo */}
      <div>
        <img src={Logo} alt="logo" className="h-10" />
      </div>
      <div className="space-x-3">
        <button className="bg-primary/80 text-white px-4 py-2 font-semibold rounded-lg tracking-wide leading">
          <Link to={"/dashboard"}>Landlords</Link>
        </button>
        {/* <button className="bg-primary/80 text-white px-4 py-2 font-semibold rounded-lg tracking-wide leading">
          Tenants
        </button> */}
      </div>
    </div>
  );
};

export default NavBar;
