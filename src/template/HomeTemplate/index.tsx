import { Grid } from '@mui/material'

import { LoginPage } from 'components/LoginPage'

import { FormField } from './FormField'
import { Description } from './Description'

export function HomeTemplate() {
  return (
    <LoginPage>
      <Grid spacing={5} container justifyContent="center">
        <Grid item xs={8} sm={6}>
          <Description />
        </Grid>
        <Grid item xs={8} sm={6}>
          <FormField />
        </Grid>
      </Grid>
    </LoginPage>
  )
}
