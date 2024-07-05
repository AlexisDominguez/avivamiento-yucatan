import { useState } from "react";
import { SideMenu } from "./SideMenu";
import clsx from "clsx";
import { ROUTES } from "../consts/routes";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header
        className={clsx(
          "sticky col-span-6 flex justify-between items-center top-0 bg-white py-4 z-10 px-8 -mx-8",
          !openMenu && "border-b border-gray-200"
        )}
      >
        <a href={ROUTES.main}>
          <img
            src="/logo.svg"
            alt="Avivamiento Yucatán logo"
            className="h-8 w-auto max-w-none block"
          />
        </a>
        {!openMenu ? (
          <img
            src="/icons/menu-icon.svg"
            alt="Menu"
            className="h-6 w-auto max-w-none block"
            onClick={() => setOpenMenu(true)}
          />
        ) : (
          <img
            src="/icons/close-icon.svg"
            alt="Cerrar"
            className="h-6 w-auto max-w-none block"
            onClick={() => setOpenMenu(false)}
          />
        )}
      </header>
      {openMenu && <SideMenu />}
    </>
  );
};
