import { Link } from "react-router-dom";
import NavList from "./NavList";
import AuthCheck from "./AuthCheck";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-8 border-black border-b-2">
      <NavList
        listName="Chefs"
        linkTo="/"
        listName1="Offer"
        linkTo1="/"
        listName2="Creativity"
        linkTo2="/"
      />
      <h1 className="text-4xl font-bold">
        <Link to="/">
          <h3>YVL</h3>
        </Link>
      </h1>
      <NavList
        listName="Chefs"
        linkTo="/"
        linkTo1="/"
        listName2={<AuthCheck />}
        linkTo2="/"
      />
    </nav>
  );
};

export default Navbar;
