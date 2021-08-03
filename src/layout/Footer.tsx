import styled from 'styled-components'

type FooterProps =
  React.PropsWithChildren<any>

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  display: flex;
  justify-content: center;
`

const Footer = (props: FooterProps): JSX.Element => {
  const { children } = props
  return (
    <FooterWrapper>
      {children}
    </FooterWrapper>
  )
}

export default Footer