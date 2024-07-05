import { useState } from "react";
import { SideMenu } from "./SideMenu";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className="sticky col-span-6 flex justify-between items-center top-0 bg-white py-4 z-10 px-8 -mx-8">
        <img
          src="/logo.svg"
          alt="Avivamiento Yucatán logo"
          className="h-8 w-auto max-w-none block"
        />
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
