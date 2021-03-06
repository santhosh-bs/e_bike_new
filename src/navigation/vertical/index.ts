// ** Icon imports
// import Login from 'mdi-material-ui/Login'
// import CubeOutline from 'mdi-material-ui/CubeOutline'
// import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
// import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
// import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
// import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'

// ** Type import

import { VerticalNavItemsType } from 'src/@core/layouts/types'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import Send from 'mdi-material-ui/Send'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import Table from 'mdi-material-ui/Table'
import AccountGroup from 'mdi-material-ui/AccountGroup'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      icon: HomeOutline,
      path: '/'
    },
    // {
    //   title: 'Account Settings',
    //   icon: AccountCogOutline,
    //   path: '/account-settings'
    // },
    // {
    //   sectionTitle: 'Pages'
    // },
    // {
    //   title: 'Login',
    //   icon: Login,
    //   path: '/pages/login',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Register',
    //   icon: AccountPlusOutline,
    //   path: '/pages/register',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: true
    // },
    {
      sectionTitle: 'User Interface'
    },
    {
      title: '3D Model',
      path: '/',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables'
    },
    {
      sectionTitle: 'Get in touch with us'
    },
    {
      title: 'About us',
      icon: AccountGroup,
      path: '/aboutus'
    },
    {
      title: 'Contact us',
      icon: Send,
      path: '/contactus'
    }
  ]
}

export default navigation
