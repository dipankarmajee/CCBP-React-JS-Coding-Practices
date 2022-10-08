import styled from 'styled-components'
import {GenerateButton} from '../GradientGenerator/styledComponents'

export const ListItem = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const DirectionButton = styled(GenerateButton)`
  opacity: ${props => (props.activeDirectionButtonClass ? '1' : '0.5')};
  color: black;
  margin: 5px;

  background-color: #ffffff;
`
