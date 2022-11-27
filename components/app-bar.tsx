'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import AppBar from '@mui/material/AppBar'
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
import Button from '@mui/material/Button'
import Logo from './logo'
import LoggedInIcon from './logged-in-icon'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Container from '@mui/material/Container'
import Typography from './mui/typography'

const drawerWidth = 240
const navItems = [
  {
    text: 'Home',
    href: '/',
  }, {
    text: 'About',
    href: '/about',
  }, {
    text: 'Blog',
    href: '/blog',
  }, {
    text: 'Contact',
    href: '/contact',
  },
]

const DISABLE_TRANSPARENCY = [
  '/login',
  '/about',
  '/blog',
  '/contact',
]

function ElevationScroll(props: {children: React.ReactElement}): React.ReactElement {
  const path = usePathname()
  const isBackgroundWhite = path && DISABLE_TRANSPARENCY.includes(path)
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      backdropFilter: trigger ? 'blur(8px)' : undefined,
      background: trigger || isBackgroundWhite ? 'rgba(10, 25, 41, 0.7)' : 'transparent',
      backgroundC:'',
      borderBottom: trigger ? undefined : '1px solid #121212',
      transition: 'box-shadow ease-in 300ms, background ease-in 300ms',
    },
  })
}

export default function DrawerAppBar(): React.ReactElement {
  const { status } = useSession()
  const router = useRouter()
  const path = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = (): void => {
    setMobileOpen((prevState) => !prevState)
  }

  const DrawerContent = (): React.ReactElement => (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ py: 2 }} bgcolor="primary.main">
        <Logo />
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
  )

  return (
    <>
      <CssBaseline />
      <ElevationScroll>
        <AppBar component="nav">
          <Container maxWidth="lg" disableGutters>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Box
                sx={{ flexGrow: 1, mr: 3, display: { sm: 'block' } }}
              >
                <Logo />
              </Box>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map(({ text, href }, index) => (
                  <Button key={`head-link-${index}`} sx={{ color: '#fff' }} href={href} LinkComponent={Link}>
                    {text}
                  </Button>
                ))}
              </Box>
              {status === 'authenticated' ?
                <LoggedInIcon />
                : <Button sx={{ color: '#fff' }} href='login' LinkComponent={Link}>Log in</Button>
              }
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
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
