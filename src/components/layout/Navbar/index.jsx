import { lazy } from "react";
import {
  LuHeart,
  LuLogOut,
  LuMenu,
  LuSearch,
  LuShoppingCart,
  LuUser,
  LuUserCircle,
} from "react-icons/lu";
import SimplebarReactClient from "../../SimplebarReactClient";
import VerticalMenu from "./VerticalMenu";
import { logoDarkImg, logoLightImg } from "@/assets/data/images";
import { getClientVerticalMenuItems } from "@/helpers";

const Navbar = () => {
  return (
    <>

      <div
        id="mobile-menu"
        className="hs-overlay fixed left-0 top-0 z-60 hidden h-full w-full max-w-[270px] -translate-x-full transform border-r border-default-200  bg-white transition-all hs-overlay-open:translate-x-0 dark:bg-default-50"
        tabIndex={-1}
      >
        <div className="flex h-16 items-center justify-center border-b border-dashed border-default-200 transition-all duration-300">
        <a href="/" className="flex h-10"> 
          <img
            src={logoDarkImg}
            width={130}
            height={40}
            alt="logo"
            className="flex h-10 dark:hidden"
          />
          <img
            src={logoLightImg}
            width={130}
            height={40}
            alt="logo"
            className="hidden h-10 dark:flex"
          />
        </a>
      </div>
      <SimplebarReactClient className="h-[calc(100%-4rem)]">
        <nav className="hs-accordion-group flex w-full flex-col flex-wrap p-4">
          <VerticalMenu menuItems={getClientVerticalMenuItems()} />
        </nav>
      </SimplebarReactClient>
      </div>
    </>
  );
};

export default Navbar;
