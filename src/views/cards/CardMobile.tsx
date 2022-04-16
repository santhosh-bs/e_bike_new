// ** React Imports
import { MouseEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Grid, { GridProps } from '@mui/material/Grid'
import QRCode from 'qrcode.react'
import { RWebShare } from 'react-web-share' //To share website link via other apps

// ** Icons Imports
import Twitter from 'mdi-material-ui/Twitter'
// import CartPlus from 'mdi-material-ui/CartPlus'
import Facebook from 'mdi-material-ui/Facebook'
import Linkedin from 'mdi-material-ui/Linkedin'
import GooglePlus from 'mdi-material-ui/GooglePlus'
import ShareVariant from 'mdi-material-ui/ShareVariant'

// Styled Grid component
const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.up('md')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const CardMobile = () => {
  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const downloadQRCode = () => {
    //-----Download QRCode function------//
    const canvas = document.getElementById('qr-gen')
    const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
    let downloadLink = document.createElement('a')
    downloadLink.href = pngUrl
    downloadLink.download = `Green-Pyora.png`
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  return (
    <Card>
      <Grid container spacing={6}>
        <StyledGrid item md={5} xs={12}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div>
              <QRCode
                id='qr-gen'
                value='https://green-pyora.netlify.app/'
                size={100}
                level={'H'}
                includeMargin={true}
              />
            </div>
          </CardContent>
        </StyledGrid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            paddingTop: ['0 !important', '0 !important', '1.5rem !important'],
            paddingLeft: ['1.5rem !important', '1.5rem !important', '0 !important']
          }}
        >
          <CardContent>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              Green-Pyora QR Code
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
              scan or download to share this e-bike website
            </Typography>
            <Typography sx={{ fontWeight: 'bold', marginBottom: 3 }}>Click Download QR image below </Typography>
          </CardContent>
          <CardActions className='card-action-dense'>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Button variant='contained' onClick={downloadQRCode} variant='contained'>
                {/* <CartPlus fontSize='small' sx={{ marginRight: 2 }} /> */}
                Download QR image &#x2B73;
              </Button>
              <RWebShare
                data={{
                  text: 'Green_Pyora',
                  url: 'https://green-pyora.netlify.app/',
                  title: 'Green Pyora'
                }}
                onClick={() => console.log('shared successfully!')}
              >
                <IconButton
                  id='long-button'
                  aria-label='share'
                  aria-haspopup='true'
                  onClick={handleClick}
                  aria-controls='long-menu'
                  aria-expanded={open ? 'true' : undefined}
                >
                  <ShareVariant fontSize='small' />
                </IconButton>
              </RWebShare>
              <Menu
                open={open}
                id='long-menu'
                anchorEl={anchorEl}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'long-button'
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Facebook />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Twitter />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Linkedin />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <GooglePlus />
                </MenuItem>
              </Menu>
            </Box>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardMobile
