import { useEffect, useState } from "react";
import BaseLayout from "../layouts/BaseLayout";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import MovieContainer from "../components/MovieContainer";


const Search = () => {
    const [data, setData] = useState([])
    const [searchParams] = useSearchParams()
    const searchQuery = searchParams.get('query')
    // console.log(searchParams.get('query'))

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json'
            }
          };
        
        fetch(`${process.env.REACT_APP_API_URL}search/movie?include_adult=false&language=en-US&page=1&query=${searchQuery}&api_key=${process.env.REACT_APP_API_KEY}`, options)
            .then(response => response.json())
            .then(response => setData(response.results))
            .catch(err => console.error(err));
        },[searchQuery])

    const renderMovie = (movie, index) => {
        return (
            <MovieCard key={`movie-card-${index}`} id={movie.id} title={movie.title} description={movie.overview} imageName={movie.poster_path} />
        )
    }

    return (
        <BaseLayout>
            <SearchBar />
            <MovieContainer>
                {data.map(renderMovie)}
            </MovieContainer>
        </BaseLayout>
    )
}

export default Search;

  
  