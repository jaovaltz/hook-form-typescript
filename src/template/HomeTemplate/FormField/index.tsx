import { Grid, Stack, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'

import { FormContainer } from 'components/FormContainer'
import { TextFieldCustom } from 'components/TextFieldCustom'
import { ButtonCustom } from 'components/ButtonCustom'

import { onSubmit } from './functions/onSubmit'
import { resolver } from './functions/formValidation'

export type FormData = {
  username: string
  email: string
  telephone: string
  message: string
}

export function FormField() {
  const { control, handleSubmit, watch, reset } = useForm<FormData>({
    defaultValues: { username: '', email: '', telephone: '', message: '' },
    resolver
  })
  const watchAllFields = watch()

  console.table(watchAllFields)

  return (
    <FormContainer onSubmit={handleSubmit((data) => onSubmit(data, reset))}>
      <Stack direction="column" spacing={2}>
        <TextFieldCustom label="Username" name="username" control={control} />
        <TextFieldCustom label="E-mail" name="email" control={control} />
        <TextFieldCustom
          label="Telephone"
          name="telephone"
          control={control}
          type="number"
          inputProps={{ maxLength: 11 }}
        />
        <TextFieldCustom
          name="message"
          multiline={true}
          rows={4}
          control={control}
        />
        <Grid container textAlign={'center'} spacing={1}>
          <Grid item xs={12} sm={6}>
            <ButtonCustom onClick={() => reset()}>
              <Typography>LIMPAR</Typography>
            </ButtonCustom>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ButtonCustom type="submit">
              <Typography>ENVIAR</Typography>
            </ButtonCustom>
          </Grid>
        </Grid>
      </Stack>
    </FormContainer>
  )
}
