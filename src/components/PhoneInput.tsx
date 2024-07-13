import clsx from 'clsx'
import { useId, type HTMLProps } from 'react'
import { AsYouType, type CountryCode } from 'libphonenumber-js'

interface PhoneInputProps extends HTMLProps<HTMLInputElement> {
  label: string
  countryCode: CountryCode
  inputClasses?: string
  labelClasses?: string
  containerClasses?: string
  fullWidth?: boolean
}

export const PhoneInput = (props: PhoneInputProps) => {
  const id = useId()
  const {
    label,
    inputClasses,
    labelClasses,
    containerClasses,
    fullWidth,
    value,
    countryCode,
    ...rest
  } = props

  return (
    <div className={containerClasses}>
      <label htmlFor={id} className={clsx('block text-sm font-medium mb-2', labelClasses)}>
        {label}
      </label>
      <input
        {...rest}
        id={id}
        type="text"
        value={props.value && new AsYouType(countryCode).input(props.value as string)}
        className={clsx(
          'block p-4 border border-stone-400 rounded placeholder:text-stone-400',
          fullWidth && 'w-full',
          inputClasses
        )}
      />
    </div>
  )
}
