import styled from '@mui/material/styles/styled'
import Button from '../mui/button'


const FormatButton = styled(Button)(({ theme }) => ({
  minWidth: 'initial',
  width: '36.5px',
  height: '36.5px',
  color: theme.palette.text.primary,
}))

export default FormatButton