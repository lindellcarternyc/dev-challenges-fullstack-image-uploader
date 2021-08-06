import styled from 'styled-components'
import { Card, CardTitle } from '../../components/Card'
import ProgressBar from './components/ProgressBar'

const ProgressWrapper = styled(Card)`
  width: 400px;
`
const Progress = (): JSX.Element => {
  return (
    <ProgressWrapper>
      <CardTitle>Uploading...</CardTitle>
      <ProgressBar percentCompleted={50} />
    </ProgressWrapper>
  )
}

export default Progress