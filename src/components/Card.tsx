import React, { type LegacyRef } from "react";
import { Button } from "./Button";
import { clsx } from "clsx";

interface ICardProps {
  index: number;
  classes?: string;
}

export const Card = React.forwardRef(
  ({ index, classes }: ICardProps, ref: LegacyRef<HTMLDivElement>) => {
    return (
      <div
        key={index}
        ref={ref}
        className={clsx(
          "max-w-[320px] min-h-[415px]  px-6 py-4 bg-[url('/images/worship.jpeg')] bg-cover text-white rounded-2xl flex flex-col justify-end",
          classes
        )}
      >
        <span className="text-xl font-medium block mb-3">En su presencia</span>
        <p className="text-sm mb-6 leading-6">
          Comparte con nosotros un domingo lleno de poder, milagros, testimonios
          y la manifestación del Espíritu Santo
        </p>
        <div className="flex justify-between items-center">
          <div>
            Domingo <br />
            11:00 am
          </div>
          <Button transparent>Ver más</Button>
        </div>
      </div>
    );
  }
);
