import styled from 'styled-components'

interface ProgressBarProps {
  percentCompleted: number
}

const ProgressBarBase = styled.div`
  border-radius: 0.5rem;
  height: 0.375rem;
`

const ProgressBarWrapper = styled(ProgressBarBase)`
  background-color: #f2f2f2;
`

const ProgressBarIndicator = styled(ProgressBarWrapper)<ProgressBarProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  width: ${({ percentCompleted }) => `${percentCompleted}%`};
`

const ProgressBar = ({ percentCompleted }: ProgressBarProps): JSX.Element => {
  return (
    <ProgressBarWrapper>
      <ProgressBarIndicator percentCompleted={percentCompleted}/>
    </ProgressBarWrapper>
  )
}

export default ProgressBar