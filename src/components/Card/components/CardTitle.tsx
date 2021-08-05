import styled from 'styled-components'

const CardTitleWrapper = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
`

interface CardTitleProps {
  children: string
  className?: string
}

const CardTitle = (props: CardTitleProps): JSX.Element => {
  const { children, ...rest  } = props
  return (
    <CardTitleWrapper {...rest}>
      {children}
    </CardTitleWrapper>
  )
}

export default CardTitle