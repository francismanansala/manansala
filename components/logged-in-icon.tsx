
import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import { useSession, signOut } from 'next-auth/react'
import Avatar from './mui/avatar'
import { red, grey } from '@mui/material/colors'
import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Box from './mui/box'

export default function LoggedInIcon(): React.ReactElement {
  const { data: session } = useSession()
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)


  const handleMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }
  
  return (
    <Box sx={{ filter: 'invert(0) !important' }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <Avatar>{session?.user?.image ? 
          <Image src={session?.user?.image} width={42} height={42} alt='Your profile picture' />
          : session?.user?.name && session?.user?.name[0]
        }</Avatar>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={(): void => router.push('/account')}><PersonIcon sx={{ mr: 1 }} /> Profile</MenuItem>
        <MenuItem onClick={handleClose}><SettingsIcon sx={{ mr: 1 }} />Settings</MenuItem>
        <MenuItem onClick={(): Promise<undefined> =>
          signOut({ callbackUrl: '/login' })
        }
        sx={{ color: red[900], borderTop: `1px solid ${grey[400]}`, mt: 2 }}
        ><LogoutIcon sx={{ mr: 1 }} /> Log out</MenuItem>
      </Menu>
    </Box>
  )
}