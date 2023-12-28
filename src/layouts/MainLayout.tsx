import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';

const MainLayout: React.FC = () => {
  return (
    <div className='page'>
      <div className='page__content'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
