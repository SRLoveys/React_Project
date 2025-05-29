import Movie from './movie.jsx'


function MovieList({data}) {
    
    return (
        <>
        {
            data.map( (movieList) => {
                return <Movie name={movieList.name} year={movieList.year} rating={movieList.rating}/>
            })
        }
        </>
    )
}

export default MovieList