import styled from 'styled-components'
import { Card, CardTitle } from '../../components/Card'
import ProgressBar from './components/ProgressBar'

const ProgressTitle = styled(CardTitle)`
  margin-bottom: 1rem;
`

const Progress = (): JSX.Element => {
  return (
    <Card>
      <ProgressTitle>Uploading...</ProgressTitle>
      <ProgressBar percentCompleted={50} />
    </Card>
  )
}

export default Progress