import GlobalStyles from './styles/global.styles'

import Page from './layout/Page'
import Upload from './views/Upload/Upload'

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Page>
        <Upload />
      </Page>
    </>
  )
}

export default App