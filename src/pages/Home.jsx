import { useEffect, useState } from "react";
import BaseLayout from "../layouts/BaseLayout";
import MovieCard from "../components/MovieCard";
import MovieContainer from "../components/MovieContainer";
import SearchBar from "../components/SearchBar";

const Home = () => {
    const [data, setData]  = useState([]);

    useEffect(() => {
        const options = {method: 'GET', headers: {accept: 'application/json'}};

        fetch(`${process.env.REACT_APP_API_URL}movie/top_rated?include_adult=false&language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}`, options)
            .then(response => response.json())
            .then(response => setData(response.results))
            .catch(err => console.error(err));
    }, []);

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

export default Home;