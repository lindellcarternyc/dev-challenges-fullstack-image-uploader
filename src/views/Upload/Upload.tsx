import styled from 'styled-components'

import Card from '../../components/Card'

import DragDrop from './components/DragDrop'
import UploadInput from './components/UploadInput'

const UploadWrapper = styled(Card)`
  text-align: center;
  & > * {
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 500;
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
      <h2>Upload your image</h2>
      <p id="file-types">File should be .jpg / .jpeg / .png</p>
      <DragDrop />
      <p>Or</p>
      <UploadInput />
    </UploadWrapper>
  )
}

export default Upload