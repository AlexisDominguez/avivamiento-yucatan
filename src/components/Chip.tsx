import type { ReactNode } from "react";
import clsx from "clsx";

interface IChipProps {
  label: string;
  Icon?: ReactNode;
  selected?: boolean;
  small?: boolean;
  value?: string;
  onClick?: (value?: string) => void;
}

export const Chip = (props: IChipProps) => {
  const { Icon, label, selected, small, value, onClick } = props;

  return (
    <div
      className={clsx(
        "border-2 border-black px-3 py-2 max-w-fit rounded-[37px] flex items-center bg-white hover:bg-gray-50 hover:cursor-pointer gap-1",
        selected && "filter invert",
        small && "py-1"
      )}
      onClick={() => {
        if (onClick) onClick(value);
      }}
    >
      {Icon}
      <span className="font-regular text-base">{label}</span>
    </div>
  );
};
