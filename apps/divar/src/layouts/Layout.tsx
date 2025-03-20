import { Outlet } from 'react-router-dom';
import Theme from '../providers/Theme';

const Layout = () => {
  return (
    <Theme>
      <Outlet />
    </Theme>
  );
};

export default Layout;
