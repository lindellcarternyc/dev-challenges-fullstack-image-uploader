import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global.styles'
import { mainTheme } from './styles/theme'

import Page from './layout/Page'
import Upload from './views/Upload/Upload'
import Progress from './views/Progess/Progress'


type CurrentView
  = 'Upload'
  | 'Progress'

const App = (): JSX.Element => {
  const [currentView, setCurrentView] = useState<CurrentView>('Progress')

  const render = currentView === 'Upload'
    ? <Upload />
    : <Progress />

  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Page>
        {render}
      </Page>
    </ThemeProvider>
  )
}

export default App