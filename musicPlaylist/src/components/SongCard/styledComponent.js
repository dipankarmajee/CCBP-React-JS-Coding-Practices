import styled from 'styled-components'

export const SongCardListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
`
export const Thumb = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
  margin-right: 15px;
`
export const NameGenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 40%;
`

export const Name = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin: 0px;
  margin-bottom: 10px;
  color: #ffffff;
`
export const Genre = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 0px;
  margin-bottom: 10px;
  color: #3b82f6;
`
export const Duration = styled.p`
  font-size: 22px;
  font-weight: 500;
  margin: 0px;
  margin-bottom: 10px;
  color: #ffffff;
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 20%;
`
export const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
