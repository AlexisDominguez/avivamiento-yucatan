import clsx from 'clsx';
import { useId, type HTMLProps } from 'react';
import { MdExpandMore } from 'react-icons/md';

interface SelectInputProps extends HTMLProps<HTMLSelectElement> {
  label: string;
  options: Array<{ label: string; value: string }>;
  inputClasses?: string;
  labelClasses?: string;
  containerClasses?: string;
  fullWidth?: boolean;
}

export const SelectInput = (props: SelectInputProps) => {
  const id = useId();
  const {
    label,
    inputClasses,
    labelClasses,
    containerClasses,
    fullWidth,
    options,
    ...rest
  } = props;

  return (
    <div className={clsx('relative', containerClasses)}>
      <label
        htmlFor={id}
        className={clsx('block text-sm font-medium mb-2', labelClasses)}
      >
        {label}
      </label>
      <span className="absolute right-3 top-[50px]">
        <MdExpandMore />
      </span>
      <select
        {...rest}
        id={id}
        className={clsx(
          'block p-4 border border-stone-400 rounded placeholder:text-stone-400 appearance-none after:absolute',
          fullWidth && 'w-full',
          inputClasses
        )}
      >
        <option value={''}>Selecciona una opción</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
