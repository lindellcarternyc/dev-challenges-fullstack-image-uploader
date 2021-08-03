import styled from 'styled-components'
import Footer from './Footer'

type PageProps = React.PropsWithChildren<any>
  & {
    className?: string
  }

const PageWrapper = styled.div`
  display: flex;
  height: 100vh;

  justify-content: center;
  align-items: center;
`

const Page = (props: PageProps): JSX.Element => {
  const { children, className, ...rest } = props 
  return (
    <PageWrapper className={className} {...rest}>
      {children}
      <Footer>
        Lindell, Bitch!
      </Footer>
    </PageWrapper>
  )
}

export default Page