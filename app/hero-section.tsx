import Box from '@/components/mui/box'

import Carousel from '@/components/mui/carousel'
import HeroContainer from '@/components/hero-container'
import HeroHeader from '@/components/hero-header'
import HeroImage from '@/components/hero-image'

import open from '@/public/images/open.jpg'
import home from '@/public/images/home.jpg'
import book from '@/public/images/book.jpg'
import HeroButton from '@/components/hero-button'
import HeroButtonOutlined from '@/components/hero-button copy'
import HeroText from '@/components/hero-text'
import Reveal from '@/components/transitions/reveal'

const HERO_BANNER_HEIGHT = '100vh'

export default function HeroSection(): React.ReactElement {
  return (
    <Box className="test" height={HERO_BANNER_HEIGHT}>
      <Box sx={{ position: 'absolute', left: 0, top: 0, width: '100%' }}>
        <Carousel height={HERO_BANNER_HEIGHT} interval={4000}>
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
        </Carousel>
      </Box>
    </Box>
  )
}