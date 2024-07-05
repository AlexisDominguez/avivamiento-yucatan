import { Button } from "./Button";
import { useDisableScroll } from "../hooks/useDisableScroll";
import { Chip } from "./Chip";
import { MdLanguage } from "react-icons/md";
import { MdOutlineHome } from "react-icons/md";
import { MdEmojiFlags } from "react-icons/md";
import { MdTagFaces } from "react-icons/md";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { MdOutlineFrontHand } from "react-icons/md";
import { MdOutlineComment } from "react-icons/md";
import { MdOutlineMenuBook } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

export const SideMenu = () => {
  useDisableScroll();

  return (
    <nav
      className="fixed bg-white top-16 z-10 -mx-8 w-full px-8 flex flex-col"
      style={{
        height: "calc(100% - 4rem)",
      }}
    >
      <div className="flex items-center justify-between mt-12 pb-5 border-b border-stone-400">
        <span className="block text-2xl font-medium">Más</span>
        <div className="flex gap-2">
          <Chip label="Español" Icon={<MdLanguage />} invertColors />
          <Chip label="English" Icon={<MdLanguage />} />
        </div>
      </div>
      <ul className="flex flex-col gap-6 px-2 py-1  overflow-auto">
        <li className="text-2xl flex gap-4 items-center pt-4">
          <MdOutlineHome />
          Inicio
        </li>
        <li className="text-2xl flex gap-4 items-center">
          <MdEmojiFlags />
          Servicios
        </li>
        <li className="text-2xl flex gap-4 items-center">
          <MdTagFaces />
          Nosotros
        </li>
        <li className="text-2xl flex gap-4 items-center">
          <MdOutlinePermContactCalendar />
          Contacto
        </li>
        <li className="text-2xl flex gap-4 items-center">
          <MdOutlineFrontHand />
          Oración
        </li>
        <li className="text-2xl flex gap-4 items-center">
          <MdOutlineComment />
          Testimonios
        </li>
        <li className="text-2xl flex gap-4 items-center">
          <MdOutlineMenuBook />
          Biblia
        </li>
        <li className="text-2xl flex gap-4 items-center pb-4">
          <MdOutlineLocationOn />
          Visítanos
        </li>
      </ul>
      <div className="flex justify-center pt-8 pb-11 -mx-8 border-t border-gray-300 px-9">
        <Button filled fullWidth>
          Quiero conocer a Jesús
        </Button>
      </div>
    </nav>
  );
};
