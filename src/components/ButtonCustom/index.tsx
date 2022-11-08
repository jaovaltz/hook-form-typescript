import { Button, ButtonProps } from '@mui/material'
import { ReactNode } from 'react'

type ButtonCustomProps = {
  children: ReactNode
} & ButtonProps

export function ButtonCustom({ children, ...props }: ButtonCustomProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      sx={{ width: '100px' }}
      {...props}
    >
      {children}
    </Button>
  )
}
