import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { set } from "@redux/features/drawerSlice";
import { RootState } from "@redux/store";

export const Nav = () => {
  const dispatch = useDispatch();
  const drawerState = useSelector((state: RootState) => state.drawer.value);

  return (
    <div className="drop-shadow-md shadow-md cursor-pointer">
      <div className="flex flex-row justify-between px-8 py-3 items-center">
        <div
          id="openDrawer"
          className="z-10 p-4"
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            e.stopPropagation();
            if (!drawerState) dispatch(set(true));
          }}
        >
          <GiHamburgerMenu className="" />
        </div>
        <div className="text-4xl font-bold">
          <span className="text-red-600">Book</span> Store
        </div>
        <div className="cursor-pointer">
          <FaCartShopping />
        </div>
      </div>
    </div>
  );
};
