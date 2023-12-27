import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';

const MainLayout: React.FC = () => {
  return (
    <div className='page'>
      <div className='page__content'>
        <Header />
        <div className='page__centered'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
