import { Link } from "react-router-dom";

interface NavProps {
  linkTo: string;
  linkTo1: string;
  linkTo2: string;
  listName: any;
  listName1?: any;
  listName2: any;
}

const NavList = ({
  linkTo,
  linkTo1,
  linkTo2,
  listName,
  listName2,
  listName1,
}: NavProps) => {
  return (
    <ul className="flex gap-x-8 items-center font-semibold text-sm">
      <li>
        <Link to={linkTo}>{listName}</Link>
      </li>
      <li>
        <Link to={linkTo1}>{listName2}</Link>
      </li>
      <li>
        <Link to={linkTo2}>{listName1}</Link>
      </li>
    </ul>
  );
};

export default NavList;
