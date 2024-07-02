import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-8 border-black border-b-2">
      <h1 className="text-4xl font-bold">
        <Link to="/">
          <h3>Links</h3>
        </Link>
      </h1>
      <ul className="flex gap-x-3 items-center font-semibold text-2xl">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </nav>
  );
};

export default Navbar;
