import { Chip } from "./Chip";
import { IoEllipse } from "react-icons/io5";

// TODO: Add this component dynamic and add functionality
export const Testimonials = () => {
  return (
    <>
      <div className="relative -ml-2 border-2 border-black rounded-lg">
        <div className="relative top-2 left-3 bg-white py-[23px] px-[26px] border-2 border-black rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-medium">Jane Doe</span>
            <span className="text-xs font-medium text-neutral-500">
              10/12/24
            </span>
          </div>
          <div className="font-medium text-xs text-neutral-500 mt-1">
            Mérida México
          </div>
          <div className="flex gap-2 mt-3">
            <Chip label="Familia" small />
            <Chip label="Economía" small />
          </div>
          <p className="mt-4 text-sm leading-6">
            “Estoy profundamente agradecida con Dios y la iglesia. En mis
            momentos más difíciles, encontré apoyo, amor y consuelo en mi
            comunidad de fe. Gracias a ellos, mi fe se ha fortalecido y he
            aprendido a confiar plenamente en Dios.”
          </p>
        </div>
      </div>
      <div className="flex gap-2 justify-center mt-6">
        <IoEllipse size={14} />
        <IoEllipse size={14} color="#D9D9D9" />
        <IoEllipse size={14} color="#D9D9D9" />
        <IoEllipse size={14} color="#D9D9D9" />
      </div>
    </>
  );
};
