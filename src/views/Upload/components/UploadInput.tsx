import styled from 'styled-components'

const UploadInputWrapper = styled.div`
  input {
    width: 0%;
    visibility: hidden;
  }

  button {
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    background-color: #2f80ed;
    border-radius: 0.5rem;
    color: white;
    margin-bottom: 0;
  }
`

const UploadInput = (): JSX.Element => {
  return (
    <UploadInputWrapper>
      <button>Choose a file</button>
      <input type="file" accept="image/*" />
    </UploadInputWrapper>
  )
}

export default UploadInput