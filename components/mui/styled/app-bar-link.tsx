'use client'

import { styled } from '@mui/system'
import MuiButton, { ButtonProps } from '@mui/material/Button'

interface IProps extends ButtonProps {
  currentPath?: string
}

const AppBarLinkStyled = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'currentPath',
})<IProps>(({ currentPath, href }) => ({
  mr: 1,
  fontSize: '16px',
  fontWeight: 'inherit',
  textDecoration: currentPath === href ? 'underline' : 'none',
  textTransform: 'initial',
  color: currentPath === href ? 'primary.main' : undefined,
  background: 'transparent !important',
  '&:hover': {
    color: 'primary.main',
    textDecoration: currentPath === href ? 'underline' : 'none',
  },
}))

export default function AppBarLink(props: IProps): React.ReactElement {
  return <AppBarLinkStyled
    variant='text'
    {...props}
  >
    {props.children}
  </AppBarLinkStyled>
}