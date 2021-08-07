import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
    }
  }
}

export const mainTheme: DefaultTheme = {
  colors: {
    primary: `#2f80ed`
  }
}