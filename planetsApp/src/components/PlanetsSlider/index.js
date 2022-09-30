import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="bg-container">
      <div className="slider-container">
        <Slider {...settings}>
          {planetsList.map(eachItem => (
            <div key={eachItem.id}>
              <PlanetItem>
                <img
                  src={eachItem.imageUrl}
                  alt={`planet ${eachItem.name}`}
                  className="planet-image"
                />
                <h2>{eachItem.name}</h2>
                <p>{eachItem.description}</p>
              </PlanetItem>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
