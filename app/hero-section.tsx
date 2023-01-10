'use client'

import Box from '@/components/mui/box'

import HeroContainer from '@/components/hero-container'
import HeroImage from '@/components/hero-image'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

import Reveal from '@/components/transitions/reveal'
import Hero from '@/public/images/hero-banner.svg'
import HeroDark from '@/public/images/hero-banner-dark.svg'
import { useTheme } from 'next-themes'
import Button from '@/components/mui/button'


const HERO_BANNER_HEIGHT = '100vh'

export default function HeroSection(): React.ReactElement {
  const { resolvedTheme } = useTheme()

  return (
    <Box className="test" height={HERO_BANNER_HEIGHT}>
      <Box sx={{ position: 'absolute', left: 0, top: 0, width: '100%' }}>
        <Box height={HERO_BANNER_HEIGHT}>
          {resolvedTheme === 'light' ? 
            <HeroImage src={Hero} alt="Inspire Innovate Develop Deliver" style={{ opacity: '0.05' }} />
            : <HeroImage src={HeroDark} alt="Inspire Innovate Develop Deliver" style={{ opacity: '0.1' }} />
          }
          <HeroContainer>
            <Reveal disableSlide>
              <>
                <Typography component='span'>Hello, I&apos;m</Typography><Chip color='primary' sx={{ width: { sm: '56px', xs: '32px' }, ml: '5px', height: '4px' }} />
                <Typography
                  fontSize={{ sm: 96, xs: 42 }}
                  lineHeight={{ sm: '90px', xs: '42px' }}
                  fontWeight={700}>Francis Manansala</Typography>
                <Typography
                  color='primary'
                  fontSize={{ sm: 32, xs: 24 }}
                  lineHeight={{ sm: '36px', xs: '28px' }}
                  fontWeight={700}>Full-Stack Web Developer</Typography>
                <Typography color='text.secondary' maxWidth={512} pb={3}>
                  I&apos;m an experienced full-stack web developer with a passion for technology.
                  I enjoy learning about new technologies and design patterns.
                  Come along with me on my journey.
                </Typography>
                <Button variant='contained'>Learn more</Button>
              </>
            </Reveal>
          </HeroContainer>
        </Box>
      </Box>
    </Box>
  )
}

/* <Carousel height={HERO_BANNER_HEIGHT} interval={4000}>
  <Box height={HERO_BANNER_HEIGHT}>
    <HeroImage src={home} alt="Desk with laptop" />
    <HeroContainer>
      <Reveal disableSlide repeat>
        <>
          <HeroHeader>
            With Great Design
            <br />Comes Great Response
          </HeroHeader>
          <HeroText>
            Get a beautiful custom website - the way you want it
          </HeroText>
          <HeroButtonOutlined>Learn More</HeroButtonOutlined>
          <HeroButton>Get Started</HeroButton>
        </>
      </Reveal>
    </HeroContainer>
  </Box>
  <Box height={HERO_BANNER_HEIGHT}>
    <HeroImage src={open} alt="Desk with laptop and computer" />
    <HeroContainer>
      <Reveal disableSlide repeat>
        <>
          <HeroHeader>
            Mobile Friendly and Hassle Free Websites
          </HeroHeader>
          <HeroText>
            Mobile usage is increasing everyday - is your website mobile friendly?
          </HeroText>
          <HeroButtonOutlined>Learn More</HeroButtonOutlined>
        </>
      </Reveal>
    </HeroContainer>
  </Box>
  <Box height={HERO_BANNER_HEIGHT}>
    <HeroImage src={book} alt="Desk with computer with calendar open" />
    <HeroContainer>
      <Reveal disableSlide repeat>
        <>
          <HeroHeader>
            Got Any Questions?
            <br />{"I'm Here to Help!"}
          </HeroHeader>
          <HeroText>Send me an e-mail and we can chat</HeroText>
          <HeroButton>Contact Me</HeroButton>
        </>
      </Reveal>
    </HeroContainer>
  </Box>
</Carousel> */