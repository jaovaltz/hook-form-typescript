import { ReactNode } from 'react'
import { Container, Stack } from '@mui/material'

type LoginPageProps = {
  children: ReactNode
}

export function LoginPage({ children }: LoginPageProps) {
  return (
    <Stack direction="row" height={'100vh'} alignItems="center">
      <Container>{children}</Container>
    </Stack>
  )
}
