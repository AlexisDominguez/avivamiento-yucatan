import clsx from 'clsx'
import { useId, type HTMLProps } from 'react'

interface NumberInputProps extends HTMLProps<HTMLInputElement> {
  label: string
  inputClasses?: string
  labelClasses?: string
  containerClasses?: string
  fullWidth?: boolean
}

export const NumberInput = (props: NumberInputProps) => {
  const id = useId()
  const { label, inputClasses, labelClasses, containerClasses, fullWidth, ...rest } = props

  return (
    <div className={containerClasses}>
      <label htmlFor={id} className={clsx('block text-sm font-medium mb-2', labelClasses)}>
        {label}
      </label>
      <input
        {...rest}
        id={id}
        type="number"
        className={clsx(
          'block p-4 border border-stone-400 rounded placeholder:text-stone-400',
          fullWidth && 'w-full',
          inputClasses
        )}
      />
    </div>
  )
}
