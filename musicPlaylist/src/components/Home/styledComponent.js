import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
`

export const Header = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding-left: 60px;
`

export const HeaderHeading = styled.h1`
  font-size: 50px;
  font-weight: 800;
  color: #ffffff;
  margin: 0px;
  margin-bottom: 10px;
`

export const HeaderDescription = styled.p`
  font-size: 30px;
  font-weight: 500;
  margin: 0px;
  margin-bottom: 20px;
  color: #ffffff;
`
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: #152850;
  min-height: 100vh;
`
export const BottomHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
`
export const BottomHeading = styled.h1`
  font-size: 30px;
  font-weight: 500;
  color: #ffffff;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid #ffffff;
`

export const InputSearch = styled.input`
  background-color: transparent;
  height: 30px;
  width: 250px;
  border: none;
  padding-left: 15px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  outline: none;
`

export const SearchBtn = styled.button`
  background-color: transparent;
  border: none;
  height: 30px;
  outline: none;
  align-self: center;
`
export const SongsListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  padding: 0px;
  margin-bottom: 15px;
`

export const NoSongsText = styled.p`
  font-size: 30px;
  font-weight: 800;
  color: #ffffff;
  align-self: center;
`
