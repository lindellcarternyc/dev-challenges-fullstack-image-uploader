import styled from 'styled-components'

interface CardProps extends React.PropsWithChildren<any> {

}

const CardWrapper = styled.div`
  border-radius: 0.75rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`

const Card = (props: CardProps): JSX.Element => {
  const { children, className, ...rest } = props
  return (
    <CardWrapper className={className} {...rest}>
      {children}
    </CardWrapper>
  )
}

export default Card