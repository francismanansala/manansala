import Box from '@/components/mui/box'
import Card from '@/components/mui/card'
import CardContent from '@/components/mui/card-content'

import Avatar from '@/components/mui/avatar'
import { blue } from '@mui/material/colors'
import Reveal from '@/components/transitions/reveal'
import Typography from '@/components/mui/typography'
import { SxProps } from '@mui/material/styles'
import MobileFriendlyIcon from '@/components/mui-icons/mobile-friendly'
import WorkOffIcon from '@/components/mui-icons/work-off'
import DesignServicesIcon from '@/components/mui-icons/design-services'

export default function PitchSection(): React.ReactElement {

  const AVATAR_LARGE_STYLES = {
    width: '150px',
    height: '150px',
    color: blue[700],
    bgcolor: 'transparent',
    border: '4px solid',
  }

  const ICON_STYLES: SxProps = { fontSize: '100px', color: blue[700], textAlign: 'center' }
  return (
    <Box pt={6} maxWidth={950}>
      <Card variant='outlined' sx={{ px: { sm:6, xs:1 }, py: 2 }}>
        <CardContent>
          <Box display='flex' alignItems='center' justifyContent='center' flexWrap={'wrap'} flex='1 1 300px'>
            <Reveal m={2}>
              <Avatar sx={AVATAR_LARGE_STYLES}>
                <DesignServicesIcon sx={ICON_STYLES} />
              </Avatar>
            </Reveal>
            <Reveal slide={{ direction: 'left' }} flex='1 1 320px'>
              <Box>
                <Box>
                  <Typography variant='h6' fontWeight={600}>
                      Custom Designs
                  </Typography>
                  <Typography>
                      We&apos;ll collaborate to create a website that represents your brand the way it deserves.
                  </Typography>
                </Box>
              </Box>
            </Reveal>
          </Box>
          <Box display='flex' alignItems='center' justifyContent='center' flexWrap={'wrap'} flex='1 1 300px'>
            <Reveal m={2}>
              <Avatar sx={AVATAR_LARGE_STYLES}>
                <MobileFriendlyIcon sx={ICON_STYLES} />
              </Avatar>
            </Reveal>
            <Reveal slide={{ direction: 'left' }} flex='1 1 320px'>
              <Box>
                <Box>
                  <Typography variant='h6' fontWeight={600}>
                      Mobile Friendly
                  </Typography>
                  <Typography>
                      Optimized websites using NextJS and GraphQL reduce the amount of data sent to
                      only the minimal required for customers to start browsing your website.
                  </Typography>
                </Box>
              </Box>
            </Reveal>
          </Box>
          <Box display='flex' alignItems='center' justifyContent='center' flexWrap={'wrap'} flex='1 1 300px'>
            <Reveal m={2}>
              <Avatar sx={AVATAR_LARGE_STYLES}>
                <WorkOffIcon sx={ICON_STYLES} />
              </Avatar>
            </Reveal>
            <Reveal slide={{ direction: 'left' }} flex='1 1 320px'>
              <Box>
                <Box>
                  <Typography variant='h6' fontWeight={600}>
                      Hassle Free
                  </Typography>
                  <Typography>
                      Setup and maintenance of DNS, servers, database, security, SEO, and other related services
                      are taken care of so you don&apos;t need to think about it.
                  </Typography>
                </Box>
              </Box>
            </Reveal>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}