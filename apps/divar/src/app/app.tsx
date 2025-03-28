// Uncomment this line to use CSS modules
// import styles from './app.module.css';
// import Theme from '../providers/Theme';

import { Theme } from '@divar/providers';
import { AppRoutes } from '@divar/routes';

export function App() {
  return (
    <Theme>
      <AppRoutes />
    </Theme>
  );
}

export default App;
