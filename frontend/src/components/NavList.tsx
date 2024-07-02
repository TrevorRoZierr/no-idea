import { Link } from "react-router-dom";

interface NavProps {
  linkTo: string;
  listName: any;
}

const NavList = ({ linkTo, listName }: NavProps) => {
  return (
    <ul className="flex gap-x-3 items-center font-semibold text-2xl">
      <li>
        <Link to={linkTo}>{listName}</Link>
      </li>
      <li>
        <Link to={linkTo}>{listName}</Link>
      </li>
      <li>
        <Link to={linkTo}>{listName}</Link>
      </li>
    </ul>
  );
};

export default NavList;
