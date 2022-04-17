// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
// import FormLayoutsSeparator from 'src/views/form-layouts/FormLayoutsSeparator'
// import FormLayoutsAlignment from 'src/views/form-layouts/FormLayoutsAlignment'
// import FormLayoutsBasic from 'src/views/form-layouts/FormLayoutsBasic'

import FormLayoutsIcons from 'src/views/form-layouts/FormLayoutsIcons'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const FormLayouts = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6} sx={{ width: '100%' }}>
        <Grid item xs={12} md={6}>
          <FormLayoutsIcons />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default FormLayouts