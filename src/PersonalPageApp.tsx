import { AppTheme } from './theme'
import {Typography} from '@mui/material'
import { MailOutline } from '@mui/icons-material'
import { AppRouter } from './router/AppRouter'

export const PersonalPageApp = () => {

  return (
    <>
      <AppTheme>
        <AppRouter/>  
      </AppTheme>
    </>
  )
}

