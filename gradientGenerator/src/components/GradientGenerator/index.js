import {Component} from 'react'

import {
  Container,
  Heading,
  Paragraph,
  LabelContainer,
  Label,
  Input,
  GenerateButton,
  UnorderList,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    firstColorValue: '#8ae323',
    secondColorValue: '#014f7b',
    bgImage: `linear-gradient(to ${gradientDirectionsList[0].value}, #8ae323, #014f7b)`,
    activeDirection: gradientDirectionsList[0].value,
  }

  onChangeFirstColor = event => {
    this.setState({firstColorValue: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColorValue: event.target.value})
  }

  onClickGradientGenerate = () => {
    const {firstColorValue, secondColorValue, activeDirection} = this.state
    this.setState({
      bgImage: `linear-gradient(to ${activeDirection}, ${firstColorValue}, ${secondColorValue})`,
    })
  }

  activeDirectionState = value => {
    this.setState({activeDirection: value})
  }

  render() {
    const {
      firstColorValue,
      secondColorValue,
      bgImage,
      activeDirection,
    } = this.state

    return (
      <Container bgImage={bgImage} data-testid="gradientGenerator">
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <UnorderList as="ul">
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              gradientDirectionsList={eachItem}
              activeDirectionState={this.activeDirectionState}
              activeDirectionButton={activeDirection === eachItem.value}
            />
          ))}
        </UnorderList>

        <Paragraph>Pick the Colors</Paragraph>
        <LabelContainer>
          <Label>
            <Paragraph>{firstColorValue}</Paragraph>

            <Input
              type="color"
              onChange={this.onChangeFirstColor}
              value={firstColorValue}
            />
          </Label>
          <Label>
            <Paragraph>{secondColorValue}</Paragraph>

            <Input
              type="color"
              onChange={this.onChangeSecondColor}
              value={secondColorValue}
            />
          </Label>
        </LabelContainer>
        <GenerateButton onClick={this.onClickGradientGenerate}>
          Generate
        </GenerateButton>
      </Container>
    )
  }
}

export default GradientGenerator
