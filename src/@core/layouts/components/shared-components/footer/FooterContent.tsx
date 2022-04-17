// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
// import useMediaQuery from '@mui/material/useMediaQuery'

const FooterContent = () => {
  // ** Var
  // const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography
        sx={{ mr: 2 }}
      >{`Copyright © ${new Date().getFullYear()} GREEN PYORA. All Rights Reserved.`}</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', '& :not(:last-child)': { mr: 4 } }}>
        <Link href='/aboutus'>About US</Link>
        <Link href='/contactus'>Contact US</Link>
      </Box>
    </Box>
  )
}

export default FooterContent
