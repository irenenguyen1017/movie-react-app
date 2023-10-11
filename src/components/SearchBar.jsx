import {useState} from 'react'
import { useNavigate, createSearchParams, useLocation, useSearchParams} from 'react-router-dom';

const SearchBar = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(pathname)

    const onchangeHandler = (e) => {
        setInput(e.target.value);
    };

    const keyPressHandler = (e) => {
        if (input.length > 0 && e.key === 'Enter') {
            if (pathname === '/search') {
                setSearchParams(createSearchParams({query: input}).toString())
            } else {
                navigate({
                    pathname: 'search',
                    search: createSearchParams({query: input}).toString()
                });
            }
        };
    };

    return (
        <div className="w-full mb-8">
            <input 
            type="text" 
            placeholder="Search movie by title..." 
            className="input input-bordered w-full" 
            value={input}
            onChange={onchangeHandler}
            onKeyDown={keyPressHandler}
            />
        </div>
    );
};

export default SearchBar;
