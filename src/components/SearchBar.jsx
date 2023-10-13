import { useState } from 'react';
import { useNavigate, createSearchParams, useLocation, useSearchParams } from 'react-router-dom';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState(searchParams.get('query') ?? '');
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onchangeHandler = (e) => {
    setInput(e.target.value);
  };

  const keyPressHandler = (e) => {
    if (input.trim() !== '' && e.key === 'Enter') {
      // fixed error when searching with spaces
      if (pathname === '/search') {
        setSearchParams(createSearchParams({ query: input }).toString());
      } else {
        navigate({
          pathname: 'search',
          search: createSearchParams({ query: input }).toString(),
        });
      }
    }
  };

  return (
    <div className='w-full mb-8'>
      <input
        type='text'
        placeholder='Search movie by title...'
        className='input input-bordered w-full'
        value={input}
        onChange={onchangeHandler}
        onKeyDown={keyPressHandler}
      />
    </div>
  );
};

export default SearchBar;
