import type { ReactNode } from "react";
import clsx from "clsx";

interface IButtonProps {
  children: ReactNode;
  classes?: string;
  fullWidth?: boolean;
}

export const Button = (props: IButtonProps) => {
  const { children, classes, fullWidth } = props;

  return (
    <button
      className={clsx(
        "border-2 border-black text-sm py-3 px-9 rounded cursor-pointer hover:bg-gray-50",
        fullWidth && "w-full",
        classes
      )}
    >
      {children}
    </button>
  );
};
