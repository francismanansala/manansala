import Box from '@/components/mui/box'
import Container from '@/components/mui/container'
import Toolbar from '@/components/mui/toolbar'
import Typography from '@/components/mui/typography'
import UserList from '@/components/user-list'

async function DefaultPage(): Promise<React.ReactElement> {
  return (
    <Container>
      <Toolbar />
      <Typography variant='h2'>Resume</Typography>
      <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt urna et viverra dignissim. Aenean sollicitudin vestibulum magna, sed pretium nisi. Ut pulvinar blandit ex, posuere porttitor lacus consequat ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sapien vitae lorem eleifend lacinia. Sed blandit sodales nibh non molestie. Phasellus tempor cursus tellus id varius. Sed at risus in augue mollis pretium. Ut cursus, ante eget vehicula venenatis, ex urna blandit neque, vel commodo ex sapien id turpis. Quisque sit amet egestas ex. Sed in elementum risus, dignissim hendrerit magna. Proin tincidunt facilisis faucibus. Morbi eu gravida sem. Proin quam leo, lacinia non nulla non, fringilla malesuada diam.</Typography>

      <Typography>Maecenas imperdiet dolor in malesuada malesuada. Proin scelerisque, mi in gravida vehicula, tortor tellus finibus quam, non pulvinar leo lectus et leo. Vestibulum ac odio blandit, porta nisl nec, malesuada dui. Vestibulum facilisis volutpat ligula sed bibendum. Integer et metus enim. Integer tempor fermentum dignissim. Etiam scelerisque vel felis quis semper.</Typography>

      <Typography>Integer magna neque, interdum sit amet metus eu, luctus egestas ligula. Ut fermentum porttitor diam, ut vehicula orci auctor quis. In cursus augue vel suscipit vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec tempor quam. Donec ut porta tortor. Praesent sit amet ligula nec nulla egestas mattis. Mauris arcu metus, lobortis in congue vitae, pharetra quis augue. Donec id augue non erat commodo lobortis. Aliquam gravida nisi nulla, id tincidunt elit fermentum non. Sed ultrices neque vitae sapien tempor euismod. Sed nibh ex, mollis nec diam at, sagittis elementum est.</Typography>

      <Typography>Nulla eget mi quis dui facilisis vestibulum. Praesent tempus tellus non eros vestibulum, non rutrum leo aliquam. Praesent facilisis eros non risus semper, in rutrum metus porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque nisl non libero elementum aliquam. Aenean non dui vel ligula varius congue eget eu urna. In vehicula diam egestas tellus blandit sodales. Cras sed facilisis tellus.</Typography>

      <Typography>Proin turpis metus, rhoncus sit amet augue vitae, volutpat ornare lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sed elit non ipsum ultricies condimentum vel et massa. Etiam sed faucibus massa. Sed iaculis quis orci vel tempor. Nulla scelerisque erat placerat metus tristique pellentesque. Vivamus at lacinia leo, sit amet ultrices purus. Nam iaculis risus facilisis lacus iaculis, id suscipit sapien scelerisque. Nulla sed placerat velit. Duis venenatis tristique augue eu vehicula. Nam libero augue, lobortis ullamcorper elit et, feugiat pulvinar ipsum. Nam turpis diam, pulvinar non elit sit amet, mattis efficitur ligula. Suspendisse dui diam, porttitor at nulla nec, interdum iaculis ligula. Sed gravida porta eros sed volutpat. Aenean ornare ut sapien quis sagittis. Pellentesque maximus mattis nisl, a tristique elit suscipit vitae.</Typography>
      
      <Box py={3}><UserList /></Box>
    </Container>
  )
}

export default DefaultPage