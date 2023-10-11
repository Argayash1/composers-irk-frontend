import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';

const MainLayout: React.FC = () => {
  return (
    <div className='page'>
      <Header />
      <div className='page__content'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
