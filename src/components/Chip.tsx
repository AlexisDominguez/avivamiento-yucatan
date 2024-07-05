import type { ReactNode } from "react";
import clsx from "clsx";

interface IChipProps {
  label: string;
  Icon?: ReactNode;
  invertColors?: boolean;
  small?: boolean;
}

export const Chip = (props: IChipProps) => {
  const { Icon, label, invertColors, small } = props;

  return (
    <div
      className={clsx(
        "border-2 border-black px-3 py-2 max-w-fit rounded-[37px] flex items-center bg-white hover:bg-gray-50 hover:cursor-pointer gap-1",
        invertColors && "filter invert",
        small && "py-1"
      )}
    >
      {Icon}
      <span className="font-regular text-base">{label}</span>
    </div>
  );
};
