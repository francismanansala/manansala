'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import AppBar from './app-bar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Logo from './logo'
import LoggedInIcon from './logged-in-icon'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Container from '@mui/material/Container'
import Typography from './mui/typography'
import Dialog from '@mui/material/Dialog'
import LoginCard from './login-card'
import AppBarLink from './mui/styled/app-bar-link'
import ThemeModeSwitch from './theme-mode-switch'
import { useTheme } from 'next-themes'
import GlobalStyles from '@mui/material/GlobalStyles'

const drawerWidth = 240
const navItems = [
  {
    text: 'Home',
    href: '/',
  }, {
    text: 'Blog',
    href: '/blog',
  }, {
    text: 'About',
    href: '/about',
  }, {
    text: 'Resume',
    href: '/resume',
  }, {
    text: 'Contact',
    href: '/contact',
  },
]

interface ILoginDialogProps {
  onClose: (value: string) => void,
  open: boolean
}

function LoginDialog({ open, onClose }: ILoginDialogProps): React.ReactElement {
  return (<Dialog open={open} onClose={onClose}>
    <LoginCard />
  </Dialog>)
}

export default function DrawerAppBar(): React.ReactElement {
  const { resolvedTheme, setTheme } = useTheme()
  const { status } = useSession()
  const router = useRouter()
  const path = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false)
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  const handleThemeToggle = (): void => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }

  const handleDrawerToggle = (): void => {
    setMobileOpen((prevState) => !prevState)
  }

  const handleOpenLoginDialog = (): void => {
    setIsLoginDialogOpen(true)
  }

  const handleCloseLoginDialog = (): void => {
    setIsLoginDialogOpen(false)
  }

  const DrawerContent = (): React.ReactElement => (
    <Box sx={{ textAlign: 'center' }}>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Box sx={{ py: 2 }} bgcolor="background.paper">
          <Logo sx={{ color: 'primary.main' }} />
        </Box>
        <Divider />
        <List>
          {navItems.map(({ text, href }, index) => (
            <ListItem key={`list-item-${index}`} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }} selected={path === href} onClick={function (): void {
                router.push(href)
              }}>
                <ListItemText primary={
                  <Typography>
                    {text}
                  </Typography>
                } />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider />
      <Box sx={{ py: 2 }}>
        <ThemeModeSwitch
          checked={resolvedTheme === 'dark'}
          onChange={handleThemeToggle}
          inputProps={{ 'aria-label': 'Switch theme' }}
        />
      </Box>
    </Box>
  )
  return (
    <>
      <GlobalStyles styles={{
        '*': {
          transition: 'color 0.3s ease-out, background-color 0.3s ease-out',
        },
      }}/>
      <CssBaseline />
      <AppBar>
        <Container maxWidth="lg" disableGutters>
          <Toolbar>
            <Box display='flex' flexGrow={1}>
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' }, color: 'primary.main' }}
              >
                <MenuIcon />
              </IconButton>
              <Box
                sx={{ mr: 3, display: 'flex', alignItems: 'center' }}
              >
                <Logo size={scrollTrigger ? 'medium' : 'large'} sx={{ color: 'primary.main' }}/>
              </Box>
              <Box sx={{ flexGrow: 1, justifyContent: 'space-around', display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                {navItems.map(({ text, href }, index) => (
                  <AppBarLink
                    key={`head-link-${index}`}
                    href={href}
                    LinkComponent={Link}
                    currentPath={path ?? ''}
                    sx={{ color: 'text.primary' }}
                  >
                    {text}
                  </AppBarLink>
                ))}
              </Box>
              <Box sx={{ flexGrow: 0, p: 2, display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                <ThemeModeSwitch
                  checked={resolvedTheme === 'dark'}
                  onChange={handleThemeToggle}
                  inputProps={{ 'aria-label': 'Switch theme' }}
                />
              </Box>
            </Box>
            {status === 'authenticated' ?
              <LoggedInIcon />
              : <>
                <AppBarLink
                  currentPath='#'
                  sx={{ color: 'text.primary' }}
                  onClick={handleOpenLoginDialog}
                >
                  Log in
                </AppBarLink>
                <LoginDialog open={isLoginDialogOpen} onClose={handleCloseLoginDialog} />
              </>
            }
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <DrawerContent />
        </Drawer>
      </Box>
    </>
  )
}
