import { MdOutlineChurch, MdOutlineWhatshot } from "react-icons/md";
import { Button } from "../../components/Button";
import { ROUTES, type RoutesURLs } from "../../consts/routes";
import { AiFillHeart } from "react-icons/ai";
import { Chip } from "../../components/Chip";
import { useState } from "react";

type Sections = "pastors" | "church" | "beliefs";

type SectionInfo = {
  [key in Sections]: {
    image: string;
    title: string;
    description: string;
    route: RoutesURLs;
  };
};

const SECTIONS_INFO: SectionInfo = {
  pastors: {
    image: "/images/pastors.jpeg",
    title: "José Manual y Patricia",
    description:
      "Lorem ipsum dolor sit amet consectetur. Orci lectus lectus aliquam sit potenti integer. Consequat mauris facilisis molestie tellus proin et pellentesque sodales",
    route: ROUTES.about,
  },
  church: {
    image: "/images/worship.jpeg",
    title: "Sección de Iglesia",
    description:
      "Sección de iglesia sit amet consectetur. Orci lectus lectus aliquam sit potenti integer. Consequat mauris facilisis molestie tellus proin et pellentesque sodales",
    route: ROUTES.about,
  },
  beliefs: {
    image: "/images/pastors.jpeg",
    title: "Sección de creencias",
    description:
      "Sección de creencias sit amet consectetur. Orci lectus lectus aliquam sit potenti integer. Consequat mauris facilisis molestie tellus proin et pellentesque sodales",
    route: ROUTES.about,
  },
};

const Section = ({ section }: { section: Sections }) => {
  return (
    <div>
      <img
        src={SECTIONS_INFO[section].image}
        className="mt-8 rounded-[16px] max-h-64 object-cover w-full"
      />
      <h2 className="text-center text-2xl mt-8 font-medium">
        {SECTIONS_INFO[section].title}
      </h2>
      <p className="text-center mt-8 leading-7">
        {SECTIONS_INFO[section].description}
      </p>
      <a href={SECTIONS_INFO[section].route}>
        <Button classes="mt-8" fullWidth>
          Leer más
        </Button>
      </a>
    </div>
  );
};

export const About = () => {
  const [selectedChip, setSelectedChip] = useState<Sections>("pastors");

  const handleSelectedChip = (value?: string) => {
    if (value) setSelectedChip(value as Sections);
  };

  return (
    <>
      <h3 className="font-medium mt-4 text-xl">Nosotros</h3>
      <div className="flex mt-4 ml-[-8px] justify-between">
        <Chip
          label={"Pastores"}
          selected={selectedChip === "pastors"}
          value="pastors"
          Icon={<AiFillHeart size={20} />}
          onClick={handleSelectedChip}
        />
        <Chip
          Icon={<MdOutlineChurch size={20} />}
          selected={selectedChip === "church"}
          label={"Iglesia"}
          value="church"
          onClick={handleSelectedChip}
        />
        <Chip
          Icon={<MdOutlineWhatshot size={20} />}
          label={"Creencias"}
          value="beliefs"
          selected={selectedChip === "beliefs"}
          onClick={handleSelectedChip}
        />
      </div>
      <Section section={selectedChip} />
    </>
  );
};
