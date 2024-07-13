import { Button } from './Button'
import { useDisableScroll } from '../hooks/useDisableScroll'
import { Chip } from './Chip'
import { MdLanguage } from 'react-icons/md'
import { MdOutlineHome } from 'react-icons/md'
import { MdEmojiFlags } from 'react-icons/md'
import { MdTagFaces } from 'react-icons/md'
import { MdOutlinePermContactCalendar } from 'react-icons/md'
import { MdOutlineFrontHand } from 'react-icons/md'
import { MdOutlineComment } from 'react-icons/md'
import { MdOutlineMenuBook } from 'react-icons/md'
import { MdOutlineLocationOn } from 'react-icons/md'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { MdKeyboardArrowUp } from 'react-icons/md'

import { ROUTES } from '../consts/routes'
import { ListItem } from './ListItem'

export const SideMenu = () => {
  useDisableScroll()

  return (
    <nav
      className="fixed bg-white top-16 z-10 -mx-8 w-full px-8 flex flex-col"
      style={{
        height: 'calc(100% - 4rem)'
      }}
    >
      <div className="flex items-center justify-between mt-12 pb-5 border-b border-stone-400">
        <span className="block text-2xl font-medium">Más</span>
        <div className="flex gap-2">
          <Chip label="Español" Icon={<MdLanguage />} selected />
          <Chip label="English" Icon={<MdLanguage />} />
        </div>
      </div>
      <ul className="flex flex-col gap-6 px-2 py-1  overflow-auto">
        <ListItem href={ROUTES.main} classes="pt-4" icon={<MdOutlineHome />} label={'Inicio'} />
        <ListItem
          icon={<MdEmojiFlags />}
          label="Servicios"
          collapsable
          subItems={[
            { label: 'Pastores', route: ROUTES.about },
            { label: 'Iglesia', route: ROUTES.about },
            { label: 'En lo que creemos', route: ROUTES.about }
          ]}
        />
        <ListItem
          collapsable
          icon={<MdTagFaces />}
          label={'Nosotros'}
          subItems={[
            { label: 'Pastores', route: ROUTES.about },
            { label: 'Iglesia', route: ROUTES.about },
            { label: 'En lo que creemos', route: ROUTES.about }
          ]}
        />
        <ListItem icon={<MdOutlinePermContactCalendar />} label="Contacto" />
        <ListItem icon={<MdOutlineFrontHand />} label={'Oración'} href={ROUTES.askForPray} />
        <ListItem icon={<MdOutlineComment />} label={'Testimonios'} />
        <ListItem icon={<MdOutlineMenuBook />} label={'Biblia'} />
        <ListItem classes="pb-4" icon={<MdOutlineLocationOn />} label="Visítanos" />
      </ul>
      <div className="flex justify-center pt-8 pb-11 -mx-8 border-t border-gray-300 px-9">
        <Button filled fullWidth>
          Quiero conocer a Jesús
        </Button>
      </div>
    </nav>
  )
}
