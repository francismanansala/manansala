import { createTheme, PaletteColor, PaletteColorOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface CustomPalette {
    facebookBlue?: PaletteColorOptions
    githubBlack?: PaletteColorOptions
    gitlabOrange?: PaletteColorOptions
    google?: PaletteColorOptions
    whiteButton?: PaletteColorOptions
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Palette extends CustomPalette {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface PaletteOptions extends CustomPalette {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    facebookBlue: true,
    githubBlack: true,
    gitlabOrange: true,
    google: true,
    whiteButton: true
  }
}

const { palette } = createTheme()
const { augmentColor } = palette
export const createColor = (mainColor: string): PaletteColor => augmentColor({ color: { main: mainColor } })