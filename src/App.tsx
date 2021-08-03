import GlobalStyles from './styles/global.styles'

import Page from './layout/Page'

import Card from './components/Card'

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Page>
        <Card>
          Hello World
        </Card>
      </Page>
    </>
  )
}

export default App