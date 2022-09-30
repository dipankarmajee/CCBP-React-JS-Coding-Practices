import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  //   const {actionMovieList, comedyMovieList} = props
  const {children} = props
  console.log(children)

  return (
    <>
      <IoMdClose />
      <div>{children}</div>
    </>
  )
}

export default MovieItem
