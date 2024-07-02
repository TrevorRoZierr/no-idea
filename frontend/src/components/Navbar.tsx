import { SignInButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-8 border-black border-b-2">
      
      <h1 className="text-4xl font-bold">
        <Link to="/">
          <h3>YVL</h3>
        </Link>
      </h1>
      
    </nav>
  );
};

export default Navbar;
