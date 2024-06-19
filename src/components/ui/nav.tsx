import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";

export const Nav = () => {
  return (
    <div className="drop-shadow-md shadow-md">
      <div className="flex flex-row justify-between px-8 py-3 items-center">
        <div>
          <GiHamburgerMenu />
        </div>
        <div className="text-4xl font-bold">
          <span className="text-red-600">Book</span> Store
        </div>
        <div>
          <FaCartShopping />
        </div>
      </div>
    </div>
  );
};
