import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: Roboto;
  background-image: ${props => props.bgImage};
`

export const Heading = styled.h1`
  color: #ffffff79;
  font-size: 16px;
`
export const Paragraph = styled.p`
  color: #ededed;
  font-size: 24px;
`

export const LabelContainer = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #ffffff79;
  font-size: 14px;
  margin: 10px 20px 10px 0px;
`

export const Input = styled.input`
  padding: 0;
  outline: none;
  margin: 0;
  border: 0px;
  border-width: 0px;
`
export const GenerateButton = styled.button`
  padding: 5px 20px 5px 20px;
  outline: none;
  cursor: pointer;
  border-width: 0px;
  background-color: #00c9b7;
  border-radius: 4px;
  font-weight: 500;
`
export const UnorderList = styled(Input)`
  display: flex;
`
