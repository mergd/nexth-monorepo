import { createSystem, defaultConfig } from '@chakra-ui/react'
import { chakraFonts } from './fonts'
export const system = createSystem(defaultConfig, {
  theme: {
    semanticTokens: {},
    tokens: {
      fonts: chakraFonts,
      colors: {},
    },
  },
  globalCss: {},
})
