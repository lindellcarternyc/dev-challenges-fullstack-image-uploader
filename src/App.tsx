import GlobalStyles from './styles/global.styles'

import Page from './layout/Page'

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Page>
        Current Content
      </Page>
    </>
  )
}

export default App