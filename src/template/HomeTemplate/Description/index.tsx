import { Stack, Typography } from '@mui/material'
import { title, description } from './data'

export function Description() {
  return (
    <Stack spacing={3}>
      <Typography variant="h1">{title}</Typography>
      <Typography>{description}</Typography>
    </Stack>
  )
}
