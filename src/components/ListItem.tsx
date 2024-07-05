import clsx from "clsx";
import { useState, type ReactNode } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface IListItem {
  label: string;
  icon?: ReactNode;
  collapsable?: boolean;
  href?: string;
  classes?: string;
  handleCollapse?: () => void;
  subItems?: Array<{
    label: string;
    route: string;
  }>;
}

export const ListItem = ({
  label,
  icon,
  collapsable,
  href,
  classes,
  subItems,
}: IListItem) => {
  const [openSubItems, setOpenSubItems] = useState(false);

  const wrapWithLink = (content: ReactNode) => {
    return <a href={href}>{content}</a>;
  };

  const collapsableIcon = () => {
    if (openSubItems) {
      return <MdKeyboardArrowUp />;
    }

    return <MdKeyboardArrowDown />;
  };

  const listItem = (
    <li className={clsx("text-2xl", classes)}>
      <div
        className="flex items-center justify-between"
        onClick={() => {
          if (collapsable) {
            if (!subItems?.length) {
              throw new Error(
                "subItems props needed to work with collapse prop"
              );
            }

            setOpenSubItems(!openSubItems);
          }
        }}
      >
        <span className="flex gap-4 items-center">
          {icon} {label}
        </span>
        {collapsable && collapsableIcon()}
      </div>
      {openSubItems && subItems?.length && (
        <div className="text-base text-stone-500 flex flex-col mt-4">
          {subItems.map((item) => (
            <a href={item.route} className="block py-2 pl-10">
              / {item.label}
            </a>
          ))}
        </div>
      )}
    </li>
  );

  return href ? wrapWithLink(listItem) : listItem;
};
