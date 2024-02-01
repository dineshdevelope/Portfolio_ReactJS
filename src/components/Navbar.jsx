import { Link } from "react-router-dom";

Link;
const Navbar = () => {
  return (
    <div className="p-5 bg-green-300">
      <ul className="flex  justify-end space-x-10 p-2">
        <li className="bg-green-500 text-white font-semibold rounded p-2 hover:bg-green-600 hover:text-gray-800">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="bg-green-500 text-white font-semibold rounded p-2 hover:bg-green-600 hover:text-gray-800">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="bg-green-500 text-white font-semibold rounded p-2 hover:bg-green-600 hover:text-gray-800">
          <Link to={"/menu"}>Technologies</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
