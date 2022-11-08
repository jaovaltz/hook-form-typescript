import { TextField, TextFieldProps } from '@mui/material'
import { Controller } from 'react-hook-form'

type TextFieldCustomProps = {
  name: string
  control: any
  rules?: Object
} & TextFieldProps

export function TextFieldCustom({
  name,
  control,
  rules,
  ...props
}: TextFieldCustomProps) {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          color="secondary"
          error={!!error}
          helperText={error?.message}
          InputLabelProps={{
            style: { color: '#655B59' }
          }}
          {...field}
          {...props}
        />
      )}
    />
  )
}
