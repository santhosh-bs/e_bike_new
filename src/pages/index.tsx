// ** MUI Imports

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardImgTop from 'src/views/cards/CardImgTop'
import CardMobile from 'src/views/cards/CardMobile'

// ** Icons Imports
// import Poll from 'mdi-material-ui/Poll'
// import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
// import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
// import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
// import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import

import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import FormLayoutsIcons from 'src/views/form-layouts/FormLayoutsIcons'

// ** Demo Components Imports
// import Table from 'src/views/dashboard/Table'

import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import SlideImage from 'src/views/dashboard/SlideImage'

// import TotalEarning from 'src/views/dashboard/TotalEarning'
// import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
// import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
// import SalesByCountries from 'src/views/dashboard/SalesByCountries'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={15}>
          <SlideImage />
        </Grid>
        <Grid
          item
          sx={{
            width: '100%',
            display: 'flex',
            padding: 8,
            paddingTop: 4,
            alignItem: 'center',
            justifyContent: 'center',
            fontFamily: 'sans-serif',
            fontStyle: 'italic',
            fontWeight: 'bold',
            color: theme => (theme.palette.mode === 'light' ? 'primary.main' : theme.palette.grey[300])
          }}
        >
          <Typography variant='h4'>KEY FEATURES</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardImgTop />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardImgTop />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardImgTop />
        </Grid>
        <Grid item xs={12} md={15}>
          <StatisticsCard />
        </Grid>
        {/* <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TotalEarning />
        </Grid> */}
        {/* <Grid item xs={12} md={6} lg={4}> */}
        {/* <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$25.6k'
                icon={<Poll />}
                color='success'
                trendNumber='+42%'
                title='Total Profit'
                subtitle='Weekly Profit'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$78'
                title='Refunds'
                trend='negative'
                color='secondary'
                trendNumber='-15%'
                subtitle='Past Month'
                icon={<CurrencyUsd />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='862'
                trend='negative'
                trendNumber='-18%'
                title='New Project'
                subtitle='Yearly Project'
                icon={<BriefcaseVariantOutline />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='15'
                color='warning'
                trend='negative'
                trendNumber='-18%'
                subtitle='Last Week'
                title='Sales Queries'
                icon={<HelpCircleOutline />}
              />
            </Grid>
          </Grid>
        </Grid> */}
        {/* <Grid item xs={12} md={6} lg={4}>
          <SalesByCountries />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <DepositWithdraw />
        </Grid> */}
        {/* <Grid item xs={12}>
          <Table />
        </Grid> */}
        <Grid item xs={12} sm={12} sx={{ margin: 5 }}>
          <CardMobile />
        </Grid>
        <DatePickerWrapper>
          <Grid container spacing={6} sx={{ width: '100%', justifyContent: 'center' }}>
            <Grid
              item
              sx={{
                width: '100%',
                display: 'flex',
                padding: 8,
                paddingTop: 10,
                alignItem: 'center',
                justifyContent: 'center',
                fontFamily: 'sans-serif',
                fontStyle: 'italic',
                fontWeight: 'bold',
                color: theme => (theme.palette.mode === 'light' ? 'primary.main' : theme.palette.grey[300])
              }}
            >
              <Typography variant='h4'>Contact US</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormLayoutsIcons />
            </Grid>
          </Grid>
        </DatePickerWrapper>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
