import { Link } from 'react-router-dom';

const BaseLayout = ({ children }) => {
  return (
    <div className='container mx-auto px-6 pb-6'>
      <div className='flex w-full min-h-12 mb-8 align-middle justify-center py-4'>
        <Link to='/'>
          <h1 className='font-sans font-light text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
            CineHub
          </h1>
        </Link>
      </div>
      {children}
    </div>
  );
};

export default BaseLayout;
