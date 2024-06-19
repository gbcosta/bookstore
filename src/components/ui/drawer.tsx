import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@redux/store";
import { set } from "@redux/features/drawerSlice";
import { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

export const Drawer = () => {
  const drawerState = useSelector((state: RootState) => state.drawer.value);
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const closeDrawer = (ev: MouseEvent) => {
    if (
      !ref.current?.contains(ev.target as HTMLElement) &&
      (ev.target as HTMLElement).id != "openDrawer"
    ) {
      dispatch(set(false));
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDrawer);

    return () => {
      document.removeEventListener("click", closeDrawer);
    };
  });

  return (
    <div>
      <div
        style={{
          translate: drawerState ? "0" : "-100%",
          transition: "translate 0.4s",
        }}
        className="h-screen flex  fixed top-0 left-0 w-full z-10"
      >
        <div
          ref={ref}
          className="z-10 bg-white h-screen w-2/6 p-4 rounded-r-md flex flex-col"
        >
          <div
            className="flex w-full justify-end cursor-pointer mb-2"
            onClick={() => {
              dispatch(set(false));
            }}
          >
            <IoMdClose className="text-2xl" />
          </div>
          <div
            className="flex flex-row w-full justify-center items-center py-1 bg-zinc-100
          group-focus:border-2 gourp-focus:border-blue-500 mb-4 px-2"
          >
            <input className="w-full outline-none bg-zinc-100" />
            <IoSearchSharp className="text-xl" />
          </div>
          <ul className="font-bold text-md flex gap-2 flex-col h-full">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Books</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
          <div className="flex flex-row justify-between font-bold items-center">
            <div className="cursor-pointer ">Register</div>
            <div className="cursor-pointer bg-gray-900 rounded-md py-2 px-4 text-white">
              Login
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: drawerState ? "block" : "none",
        }}
        className="fixed h-screen w-full bg-black top-0 left-0 z-0 opacity-20"
      />
    </div>
  );
};
