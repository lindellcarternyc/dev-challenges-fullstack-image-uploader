import styled from 'styled-components'

import { Card, CardTitle } from '../../components/Card'

import DragDrop from './components/DragDrop'
import UploadInput from './components/UploadInput'

const UploadWrapper = styled(Card)`
  text-align: center;
  & > * {
    margin-bottom: 1rem;
  }

  p {
    font-size: 12px;
  }

  #file-types {
    font-size: 0.625rem;
  }
`

const Upload = (): JSX.Element => {
  return (
    <UploadWrapper>
      <CardTitle>Upload your image</CardTitle>
      <p id="file-types">File should be .jpg / .jpeg / .png</p>
      <DragDrop />
      <p>Or</p>
      <UploadInput />
    </UploadWrapper>
  )
}

export default Upload