// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import Theme from '../providers/Theme';
import AppRoutes from '../routes/AppRoutes';

export function App() {
  return (
    <Theme>
      <AppRoutes />
    </Theme>
  );
}

export default App;
