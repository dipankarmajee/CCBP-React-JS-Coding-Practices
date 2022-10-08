import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`
export const MemeImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 400px;
  background-image: url(${prop => prop.bgImage});
  background-size: cover;
  margin: 20px 0 20px 0;
`

export const LabelElement = styled.label`
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
  font-size: 12px;
  color: #7e858e;
  width: 100%;
`
export const InputElement = styled.input`
  padding: 10px;
  border: 1px solid #7e858e;
  border-radius: 4px;
  outline: none;
  margin: 5px 0 10px 0;
  width: 100%;
`
export const CustomButton = styled.button`
  cursor: pointer;
  outline: none;
  background-color: #0b69ff;
  padding: 5px 20px 5px 20px;
  color: #ffffff;
  border-width: 0;
  border-radius: 4px;
`
export const MemeText = styled.p`
  font-family: 'Open Sans';
  font-size: ${props => props.fontSize};
  color: #ffffff;
`
