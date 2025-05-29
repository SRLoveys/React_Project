import Movie from './movie.jsx'


function MovieList({data}) {

    return (
        <div className="bg-black text-white">
        {
            data.map( (movieList) => {
                return <div className="bg-dark border-bottom border-secondary">
                    <Movie name={movieList.name} year={movieList.year} rating={movieList.rating}/></div>
            })
        }
        </div>
    )
}

export default MovieList