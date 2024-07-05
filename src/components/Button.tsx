import type { ReactNode } from "react";
import clsx from "clsx";

interface IButtonProps {
  children: ReactNode;
  transparent?: boolean;
  classes?: string;
  fullWidth?: boolean;
  filled?: boolean;
}

export const Button = (props: IButtonProps) => {
  const { children, classes, fullWidth, transparent, filled } = props;

  return (
    <button
      className={clsx(
        "border-2 border-black text-sm py-3 px-9 rounded cursor-pointer hover:bg-gray-50",
        fullWidth && "w-full",
        transparent && "border-white border px-9",
        filled && "bg-black border-black text-white focus:bg-black",
        classes
      )}
    >
      {children}
    </button>
  );
};
