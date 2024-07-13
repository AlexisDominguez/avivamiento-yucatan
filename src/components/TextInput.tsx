import clsx from 'clsx'
import { useId, type HTMLProps } from 'react'

interface TextInputProps extends HTMLProps<HTMLInputElement> {
  label: string
  inputClasses?: string
  labelClasses?: string
  containerClasses?: string
  fullWidth?: boolean
}

export const TextInput = (props: TextInputProps) => {
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
        className={clsx(
          'block p-4 border border-stone-400 rounded placeholder:text-stone-400',
          fullWidth && 'w-full',
          inputClasses
        )}
      />
    </div>
  )
}
