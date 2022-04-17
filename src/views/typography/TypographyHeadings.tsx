import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import CardUser1 from 'src/views/cards/CardUser1'
import CardUser2 from 'src/views/cards/CardUser2'
import CardUser3 from 'src/views/cards/CardUser3'
import CardUser4 from 'src/views/cards/CardUser4'
import CardUser5 from 'src/views/cards/CardUser5'
import { Divider } from '@mui/material'

const TypographyHeadings = () => {
  return (
    <Grid container spacing={6}>
      <Grid
        item
        xs={12}
        sx={{
          paddingBottom: 4,
          color: theme => (theme.palette.mode === 'light' ? 'primary.main' : theme.palette.grey[300])
        }}
      >
        <Typography variant='h4'>About Us</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardUser1 />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardUser2 />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardUser3 />
      </Grid>
      <Divider></Divider>
      <Grid item xs={12} md={4}>
        <CardUser4 />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardUser5 />
      </Grid>
    </Grid>
  )
}

export default TypographyHeadings
