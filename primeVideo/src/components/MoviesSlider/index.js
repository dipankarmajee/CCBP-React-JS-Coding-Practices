import Slider from 'react-slick'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props
  //   console.log(moviesList)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  const overlayStyles = {
    backgroundColor: '#ffff',
  }
  return (
    <div>
      <h2>Action Movies</h2>
      <Slider {...settings}>
        {moviesList.map(eachMovie => {
          if (eachMovie.categoryId === 'ACTION') {
            return (
              <div key={eachMovie.id}>
                <MovieItem>
                  <Popup
                    modal
                    trigger={
                      <button type="button" className="trigger-button">
                        <img
                          src={eachMovie.thumbnailUrl}
                          alt="thumbnail"
                          className="movie-thumbnail"
                        />
                      </button>
                    }
                    overlayStyles={overlayStyles}
                  >
                    {close => (
                      <>
                        <button
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                          testid="closeButton"
                        >
                          <IoMdClose />
                        </button>
                        <div>
                          <ReactPlayer url={eachMovie.videoUrl} />
                        </div>
                      </>
                    )}
                  </Popup>
                </MovieItem>
              </div>
            )
          }
          return null
        })}
      </Slider>

      <h2>Comedy Movies</h2>
      <Slider {...settings}>
        {moviesList.map(eachMovie => {
          if (eachMovie.categoryId === 'COMEDY') {
            return (
              <div key={eachMovie.id}>
                <MovieItem>
                  <Popup
                    modal
                    trigger={
                      <button type="button" className="trigger-button">
                        <img
                          src={eachMovie.thumbnailUrl}
                          alt="thumbnail"
                          className="movie-thumbnail"
                        />
                      </button>
                    }
                    overlayStyles={overlayStyles}
                  >
                    {close => (
                      <>
                        <button
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                          testid="closeButton"
                        >
                          <IoMdClose />
                        </button>
                        <div>
                          <ReactPlayer url={eachMovie.videoUrl} />
                        </div>
                      </>
                    )}
                  </Popup>
                </MovieItem>
              </div>
            )
          }
          return null
        })}
      </Slider>
      {/* <Slider {...settings}>
        {moviesList.map(eachMovie => {
          if (eachMovie.categoryId === 'COMEDY') {
            return (
              <div key={eachMovie.id}>
                <MovieItem>
                  <img
                    src={eachMovie.thumbnailUrl}
                    alt={eachMovie.videoUrl}
                    className="movie-thumbnail"
                  />
                </MovieItem>
              </div>
            )
          }
          return null
        })}
      </Slider> */}
    </div>
  )
}

export default MoviesSlider
