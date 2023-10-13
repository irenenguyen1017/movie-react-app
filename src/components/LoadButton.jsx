const LoadButton = ({ onClick }) => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <button className='btn btn-secondary mt-6' onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadButton;
