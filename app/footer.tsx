'use client'

import Box from '@/components/mui/box'
import Container from '@/components/mui/container'
import Divider from '@/components/mui/divider'
import { Typography } from '@mui/material'

export default function Footer(): React.ReactElement {
  return (<Box
    bgcolor='background.paper'
    borderTop={(theme): string =>  `1px solid ${theme.palette.divider}`}
    mt={4}
  >
    <Container>
      <Box p={4}>
      Manansala
      </Box>
      <Divider/>
    </Container>
    <Container>
      <Box p={2} textAlign='center'>
        <Typography variant='body2'>Copyright © 2023 Manansala</Typography>
      </Box>
    </Container>
  </Box>)
}