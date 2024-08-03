import { MdOutlineChurch, MdOutlineWhatshot } from 'react-icons/md';
import { Button } from '../../components/Button';
import { ROUTES } from '../../consts/routes';
import { AiFillHeart } from 'react-icons/ai';
import { Chip } from '../../components/Chip';
import { useState } from 'react';
import { type Sections } from '../../types/about/about';

import { ABOUT_COPYWRITING } from '../../copywriting/about/ABOUT_COPYWRITING';

const Section = ({ section }: { section: Sections }) => {
  return (
    <div key={section} className="animate-fade-in">
      <img
        src={ABOUT_COPYWRITING[section].image}
        className="mt-8 rounded-[16px] h-64 object-cover w-full"
      />
      <h2 className="text-center text-2xl mt-8 font-medium">
        {ABOUT_COPYWRITING[section].title}
      </h2>
      <p className="text-center mt-8 leading-7">
        {ABOUT_COPYWRITING[section].description}
      </p>
      <a href={ROUTES.about}>
        <Button classes="mt-8" fullWidth filled>
          Leer más
        </Button>
      </a>
    </div>
  );
};

export const About = () => {
  const [selectedChip, setSelectedChip] = useState<Sections>('pastors');

  const handleSelectedChip = (value?: string) => {
    if (value) setSelectedChip(value as Sections);
  };

  return (
    <>
      <h3 className="font-medium mt-4 text-2xl">Nosotros</h3>
      <div className="flex mt-3 ml-[-8px] justify-between">
        <Chip
          label={'Pastores'}
          selected={selectedChip === 'pastors'}
          value="pastors"
          Icon={<AiFillHeart size={20} />}
          onClick={handleSelectedChip}
        />
        <Chip
          Icon={<MdOutlineChurch size={20} />}
          selected={selectedChip === 'church'}
          label={'Iglesia'}
          value="church"
          onClick={handleSelectedChip}
        />
        <Chip
          Icon={<MdOutlineWhatshot size={20} />}
          label={'Creencias'}
          value="beliefs"
          selected={selectedChip === 'beliefs'}
          onClick={handleSelectedChip}
        />
      </div>
      <Section section={selectedChip} />
    </>
  );
};
