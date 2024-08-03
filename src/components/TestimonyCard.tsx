import { Chip } from './Chip';

export const TestimonyCard = () => {
  return (
    <div className="mx-3 mb-3">
      <div className="border-2 rounded-lg border-black relative">
        <div className="relative border-2 border-black rounded-lg py-4 px-5 top-3 left-3 bg-white z-10">
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
    </div>
  );
};
