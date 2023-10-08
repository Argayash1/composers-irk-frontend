import { Outlet } from 'react-router-dom';
import { Header } from '../components';

const MainLayout: React.FC = () => {
  return (
    <div className='page'>
      <Header />
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
