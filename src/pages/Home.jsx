import { useEffect, useState } from "react";

function Home() {
    const [data, setData]  = useState([]);

    useEffect(() => {
        const options = {method: 'GET', headers: {accept: 'application/json'}};

        fetch(`${process.env.REACT_APP_API_URL}movie/popular?language=en-US&page=6&api_key=${process.env.REACT_APP_API_KEY}`, options)
            .then(response => response.json())
            .then(response => setData(response.results))
            .catch(err => console.error(err));
    }, [])

    return (
        <div>
            <p>This is the Home page</p>
        </div>
    )
}






export default Home;