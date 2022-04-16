// ** MUI Imports
import { Theme } from '@mui/material/styles'
// import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
// import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import Menu from 'mdi-material-ui/Menu'
// import Magnify from 'mdi-material-ui/Magnify'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

// ** Components
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import NotificationDropdown from 'src/@core/layouts/components/shared-components/NotificationDropdown'
import Link from 'next/link'
import themeConfig from 'src/configs/themeConfig'
import Box, { BoxProps } from '@mui/material/Box'

// ** Styled Components
// const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   paddingRight: theme.spacing(4.5),
//   transition: 'padding .25s ease-in-out',
//   minHeight: theme.mixins.toolbar.minHeight
// }))

const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
}))

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  // ** Hook
  const hiddenSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    // <Box sx={{ position: 'fixed', alignItems: 'right', zIndex: '1000' }}>
    <Box
      sx={{ width: '100%', display: 'flex', alignItems: 'right', justifyContent: hidden ? 'center' : 'space-between' }}
    >
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {hidden ? (
          <IconButton
            color='inherit'
            onClick={toggleNavVisibility}
            sx={{ ml: -2.75, ...(hiddenSm ? {} : { mr: 3.5 }) }}
          >
            <Menu />
          </IconButton>
        ) : null}
        {/* <TextField
            size='small'
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Magnify fontSize='small' />
                </InputAdornment>
              )
            }}
          /> */}
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        {hiddenSm ? '' : ''}
        {hidden ? (
          <div>
            <Link href='/' passHref>
              <StyledLink sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img alt='GreenPyora-logo' src='/images/charge-icon.png' width={30} height={25} />
                <HeaderTitle variant='h6' sx={{ ml: 3 }}>
                  {themeConfig.templateName}
                </HeaderTitle>
              </StyledLink>
            </Link>
          </div>
        ) : (
          ''
        )}
        <ModeToggler settings={settings} saveSettings={saveSettings} />
        <NotificationDropdown />
        <UserDropdown />
      </Box>
    </Box>
    // </Box>
  )
}

export default AppBarContent
