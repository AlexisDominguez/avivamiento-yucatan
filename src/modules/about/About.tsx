import { useState } from "react";
import { type Sections } from "../../types/about/about";

import { Chip } from "../../components/Chip";
import { AiFillHeart } from "react-icons/ai";
import { MdOutlineChurch, MdOutlineWhatshot } from "react-icons/md";
import { ABOUT_COPYWRITING } from "../../copywriting/about/ABOUT_COPYWRITING";

const Section = ({ section }: { section: Sections }) => {
  return (
    <div key={section} className="animate-fade-in">
      <img
        src={ABOUT_COPYWRITING[section].image}
        className="mt-8 rounded-[16px] h-64 object-cover w-full"
      />
      <h2 className="text-2xl mt-8 font-medium">
        {ABOUT_COPYWRITING[section].title}
      </h2>
      <h3 className="text-sm mt-2 text-stone-500 mb-9">
        {ABOUT_COPYWRITING[section].subTitle}
      </h3>
      {ABOUT_COPYWRITING[section].paragraphs.map((paragraph) => (
        <p key={paragraph} className="leading-7 mb-8">
          {paragraph}
        </p>
      ))}
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
