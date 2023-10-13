const MovieContainer = ({ children }) => {
  return (
    <div className='w-full grid gap-6 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
      {children}
    </div>
  );
};

export default MovieContainer;
