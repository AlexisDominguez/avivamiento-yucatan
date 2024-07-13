import clsx from 'clsx'
import { useId, useState, type ChangeEvent, type HTMLProps } from 'react'

interface TextAreaInputProps extends HTMLProps<HTMLTextAreaElement> {
  label: string
  inputClasses?: string
  labelClasses?: string
  containerClasses?: string
  fullWidth?: boolean
  maxLength?: number
}

export const TextAreaInput = (props: TextAreaInputProps) => {
  const id = useId()
  const {
    label,
    inputClasses,
    labelClasses,
    containerClasses,
    fullWidth,
    maxLength,
    onChange,
    ...rest
  } = props

  const [charactersCount, setCharactersCount] = useState(0)

  return (
    <div className={containerClasses}>
      <label htmlFor={id} className={clsx('block text-sm font-medium mb-2', labelClasses)}>
        {label}
      </label>
      <textarea
        {...rest}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          if (maxLength) {
            if (event.target.value.length > maxLength) return
          }

          setCharactersCount(event.target.value.length)

          if (onChange) {
            onChange(event)
          }
        }}
        id={id}
        className={clsx(
          'block p-4 border border-stone-400 rounded placeholder:text-stone-400',
          fullWidth && 'w-full',
          inputClasses
        )}
      />
      {maxLength && (
        <div className="flex justify-end mt-2 text-xs">
          {charactersCount} / {maxLength}
        </div>
      )}
    </div>
  )
}
