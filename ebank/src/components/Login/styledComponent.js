import styled from 'styled-components'

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #152850;
`
export const LoginCardDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 80vh;
  background-color: #e0eefe;
  border-radius: 30px;
`
export const LoginImg = styled.img`
  width: 50%;
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 40%;
  background-color: #ffffff;
  height: 100%;
  border-radius: 30px;
  padding: 20px;
`
export const LoginH1 = styled.h1`
  font-size: 30px;
  font-weight: 800;
  color: #183b56;
`
export const Label = styled.label`
  font-size: 20px;
  font-weight: 500;
  color: #5a7184;
  margin-bottom: 15px;
`
export const Input = styled.input`
  width: 90%;
  background-color: transparent;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #c3cad9;
  outline: none;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 500;
  color: #183b56;
  margin-bottom: 20px;
`
export const LoginBtn = styled.button`
  width: 90%;
  height: 40px;
  background-color: #1565d8;
  font-size: 18px;
  font-weight: 800;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  margin-top: 15px;
  cursor: pointer;
`

export const LoginErr = styled.p`
  font-size: 12px;
  font-weight: 800;
  color: #ff0b37;
  align-self: center;
`
