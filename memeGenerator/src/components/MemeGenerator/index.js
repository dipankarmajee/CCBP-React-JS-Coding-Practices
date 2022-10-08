import {Component} from 'react'
import {
  Container,
  LabelElement,
  InputElement,
  CustomButton,
  MemeImageContainer,
  MemeText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {isMemeGenerated: false}

  onSubmitMemeGenerate = event => {
    event.preventDefault()
    // const {imageUrl} = this.state
    this.setState({isMemeGenerated: true})
  }

  onChangeImageUrl = event => {
    this.imageUrl = event.target.value
  }
  // this.setState({imageUrl: event.target.value})

  onChangeTopText = event => {
    this.topText = event.target.value
    // this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.bottomText = event.target.value
    // this.setState({bottomText: event.target.value})
  }

  onChangeFontSizeOption = event => {
    this.fontSizeOptions = event.target.value
  }

  renderMemeImage = () => {
    console.log(this.fontSizeOptions)
    return (
      <>
        <MemeImageContainer bgImage={this.imageUrl} data-testid="meme">
          <MemeText fontSize={`${this.fontSizeOptions}px`}>
            {this.topText}
          </MemeText>
          <MemeText fontSize={`${this.fontSizeOptions}px`}>
            {this.bottomText}
          </MemeText>
        </MemeImageContainer>
      </>
    )
  }

  render() {
    const {isMemeGenerated} = this.state
    return (
      <>
        <Container>
          <h1>Meme Generator</h1>
          {isMemeGenerated ? this.renderMemeImage() : null}
          <form onSubmit={this.onSubmitMemeGenerate}>
            <LabelElement>
              Image URL
              <InputElement onChange={this.onChangeImageUrl} />
            </LabelElement>
            <LabelElement>
              Top Text
              <InputElement onChange={this.onChangeTopText} />
            </LabelElement>
            <LabelElement>
              Bottom Text
              <InputElement onChange={this.onChangeBottomText} />
            </LabelElement>
            <LabelElement>
              Font Size
              <InputElement as="select" onChange={this.onChangeFontSizeOption}>
                {fontSizesOptionsList.map(eachItem => (
                  <option key={eachItem.optionId} value={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </InputElement>
            </LabelElement>
            <CustomButton type="submit">Generate</CustomButton>
          </form>
        </Container>
      </>
    )
  }
}
// const MemeGenerator = () => {

//   const onChangeImageUrl = event => {
//     console.log(event.target.value)
//   }
//   return (
//     <>
//       <Container>
//         <form onSubmit={onSubmitMemeGenerate}>
//           <LabelElement>
//             Image URL
//             <InputElement onChange={onChangeImageUrl} />
//           </LabelElement>
//           <CustomButton type="submit">Generate</CustomButton>
//         </form>
//       </Container>
//     </>
//   )
// }

export default MemeGenerator
