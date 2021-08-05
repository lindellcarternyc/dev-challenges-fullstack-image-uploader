import styled from 'styled-components'

import img from '../../../images/image.svg'

const DragDropWrapper = styled.div`
  background-color: #f6f8fb;
  border: 1px dashed #97bef4;
  border-radius: 0.75rem;
  padding: 1rem;

  p {
    color: #bdbdbd;
    font-size: 12px;
  }
`

const DragDrop = (): JSX.Element => {
  return (
    <DragDropWrapper>
      <img src={img} alt="download area" />
      <p>Drag & Drop your image here</p>
    </DragDropWrapper>
  )
}

export default DragDrop