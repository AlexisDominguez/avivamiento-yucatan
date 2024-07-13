import clsx from 'clsx';
import { useId, type HTMLProps } from 'react';

interface CheckboxInputProps extends HTMLProps<HTMLInputElement> {
  label: string;
  inputClasses?: string;
  labelClasses?: string;
  containerClasses?: string;
}

export const CheckboxInput = (props: CheckboxInputProps) => {
  const id = useId();
  const { label, inputClasses, labelClasses, containerClasses, ...rest } =
    props;

  return (
    <div className={clsx('flex items-baseline', containerClasses)}>
      <input
        {...rest}
        id={id}
        className={clsx(
          'p-4 mr-2 border border-stone-400 rounded placeholder:text-stone-400',
          inputClasses
        )}
        type="checkbox"
      />
      <label
        htmlFor={id}
        className={clsx('text-sm  mb-2 leading-6', labelClasses)}
      >
        {label}
      </label>
    </div>
  );
};
