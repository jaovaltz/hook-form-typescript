import { ReactNode } from 'react'
import { Box, BoxProps } from '@mui/material'

type FormContainerProps = {
  children: ReactNode
} & BoxProps

export function FormContainer({ children, ...props }: FormContainerProps) {
  return (
    <Box component="form" autoComplete="off" {...props}>
      {children}
    </Box>
  )
}
